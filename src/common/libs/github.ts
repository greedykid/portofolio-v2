export interface GitHubUser {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
  htmlUrl: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
}

export interface GitHubContribution {
  date: string;
  count: number;
  level: number; // 0-4
}

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalStars: number;
  contributions: GitHubContribution[];
  totalContributions: number;
  error: boolean;
}

const GITHUB_USER = 'greedykid';
export const GITHUB_USERNAME = GITHUB_USER;
const API = 'https://api.github.com';
const CONTRIB_API = 'https://github-contributions-api.jogruber.de/v4';

function headers(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'portofolio-v2',
  };
  // Optional: use a GitHub token to raise rate limit. Falls back gracefully.
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

const fetchWithTimeout = async (url: string, init?: RequestInit) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

export async function getGithubStats(): Promise<GitHubStats> {
  // Default: tampilkan kartu "tidak tersedia" hanya jika SEMUA gagal.
  const fallback: GitHubStats = {
    user: null,
    repos: [],
    totalStars: 0,
    contributions: [],
    totalContributions: 0,
    error: true,
  };

  try {
    const [userRes, reposRes, contribRes] = await Promise.allSettled([
      fetchWithTimeout(`${API}/users/${GITHUB_USER}`, {
        headers: headers(),
        next: { revalidate: 300 },
      }),
      fetchWithTimeout(`${API}/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
        headers: headers(),
        next: { revalidate: 300 },
      }),
      fetchWithTimeout(`${CONTRIB_API}/${GITHUB_USER}`, {
        next: { revalidate: 300 },
      }),
    ]);

    // Parse kontribusi terpisah & tahan banting berapa pun hasil request lain
    let contributions: GitHubContribution[] = [];
    let totalContributions = 0;
    if (contribRes.status === 'fulfilled' && contribRes.value.ok) {
      try {
        const contribData = await contribRes.value.json();
        contributions = (contribData.contributions ?? []).map(
          (c: Record<string, unknown>) => ({
            date: c.date as string,
            count: c.count as number,
            level: c.level as number,
          }),
        );
        const total = contribData.total as Record<string, number> | undefined;
        if (total) {
          totalContributions = Object.values(total).reduce(
            (sum, n) => sum + (n ?? 0),
            0,
          );
        } else {
          totalContributions = contributions.reduce(
            (sum, c) => sum + c.count,
            0,
          );
        }
      } catch {
        // data kontribusi rusak → anggap kosong
      }
    }

    if (userRes.status !== 'fulfilled' || reposRes.status !== 'fulfilled') {
      console.error('GitHub API error (user/repos)', userRes.status, reposRes.status);
      return {
        ...fallback,
        contributions,
        totalContributions,
      };
    }

    if (!userRes.value.ok || !reposRes.value.ok) {
      console.error('GitHub API error', userRes.value.status, reposRes.value.status);
      return {
        ...fallback,
        contributions,
        totalContributions,
      };
    }

    const userData = await userRes.value.json();
    const reposData = await reposRes.value.json();

    const repos: GitHubRepo[] = reposData.map((r: Record<string, unknown>) => ({
      id: r.id as number,
      name: r.name as string,
      description: (r.description as string | null) ?? '',
      htmlUrl: r.html_url as string,
      language: (r.language as string | null) ?? null,
      stargazersCount: r.stargazers_count as number,
      forksCount: r.forks_count as number,
      updatedAt: r.updated_at as string,
    }));

    const totalStars = repos.reduce(
      (sum, repo) => sum + repo.stargazersCount,
      0,
    );

    const user: GitHubUser = {
      login: userData.login,
      name: userData.name ?? userData.login,
      avatarUrl: userData.avatar_url,
      bio: userData.bio,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      createdAt: userData.created_at,
      htmlUrl: userData.html_url,
    };

    return {
      user,
      repos,
      totalStars,
      contributions,
      totalContributions,
      error: false,
    };
  } catch (err) {
    console.error('GitHub fetch failed', err);
    return fallback;
  }
}
