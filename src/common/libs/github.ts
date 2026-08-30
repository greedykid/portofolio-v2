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

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  totalStars: number;
  error: boolean;
}

const GITHUB_USER = 'greedykid';
const API = 'https://api.github.com';

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

export async function getGithubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`${API}/users/${GITHUB_USER}`, {
        headers: headers(),
        next: { revalidate: 300 },
      }),
      fetch(`${API}/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
        headers: headers(),
        next: { revalidate: 300 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.error('GitHub API error', userRes.status, reposRes.status);
      return { user: null, repos: [], totalStars: 0, error: true };
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

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

    return { user, repos, totalStars, error: false };
  } catch (err) {
    console.error('GitHub fetch failed', err);
    return { user: null, repos: [], totalStars: 0, error: true };
  }
}
