'use client';

import { FiGithub, FiFolder, FiStar, FiUsers, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import { motion } from 'motion/react';

import Card from '@/common/components/elements/Card';
import { GitHubStats as GitHubStatsData, GITHUB_USERNAME } from '@/common/libs/github';
import { Button } from '@/components/animate-ui/primitives/buttons/button';

import ContributionGrid from './ContributionGrid';

interface GitHubStatsProps {
  stats: GitHubStatsData;
}

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  PHP: 'bg-indigo-500',
  Kotlin: 'bg-purple-500',
  Blade: 'bg-green-500',
  Shell: 'bg-teal-500',
  HTML: 'bg-orange-500',
};

const GitHubStats = ({ stats }: GitHubStatsProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'repos'>('overview');
  const { user, repos, totalStars } = stats;

  // API mengembalikan beberapa tahun data; grid hanya menampilkan tahun berjalan
  const year = new Date().getFullYear();
  const yearContributions = stats.contributions.filter((c) =>
    c.date.startsWith(`${year}`),
  );
  const yearTotal = yearContributions.reduce((sum, c) => sum + c.count, 0);

  if (!user && stats.contributions.length === 0) {
    return (
      <Card className="rounded-xl border border-neutral-200 p-6 text-center dark:border-neutral-900">
        <div className="space-y-2">
          <FiGithub size={32} className="mx-auto text-neutral-400" />
          <p className="text-neutral-600 dark:text-neutral-400">
            Statistik GitHub tidak dapat dimuat saat ini.
          </p>
        </div>
      </Card>
    );
  }

  const languages = Array.from(
    repos.reduce((map, repo) => {
      if (repo.language) {
        map.set(repo.language, (map.get(repo.language) ?? 0) + 1);
      }
      return map;
    }, new Map<string, number>()),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const totalLang = languages.reduce((sum, [, count]) => sum + count, 0);

  return (
    <Card className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-900">
      {/* Header */}
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user?.avatarUrl ?? '/images/profile.svg'}
          alt={user?.name ?? user?.login ?? GITHUB_USERNAME}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full border-2 border-neutral-200 dark:border-neutral-700"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              {user?.name ?? GITHUB_USERNAME}
            </h3>
            <FiGithub size={18} className="text-neutral-400" />
          </div>
          <a
            href={user?.htmlUrl ?? `https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400"
          >
            @{user?.login ?? GITHUB_USERNAME}
          </a>
          <div className="flex flex-wrap gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-sm">
              <FiUsers size={16} className="text-neutral-400" />
              <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                {user?.followers ?? 0}
              </span>
              <span className="text-neutral-500">Followers</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <FiFolder size={16} className="text-neutral-400" />
              <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                {user?.publicRepos ?? 0}
              </span>
              <span className="text-neutral-500">Repos</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <FiStar size={16} className="text-yellow-400" />
              <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                {totalStars}
              </span>
              <span className="text-neutral-500">Stars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-neutral-200 dark:border-neutral-900">
        {(['overview', 'repos'] as const).map((key) => {
          const active = activeTab === key;
          const label = key === 'overview' ? 'Ringkasan' : `Repositori (${repos.length})`;
          return (
            <Button
              key={key}
              onClick={() => setActiveTab(key)}
              hoverScale={1}
              tapScale={0.97}
              className={`relative flex-1 py-3 text-sm font-medium transition-colors ${
                active
                  ? 'text-neutral-800 dark:text-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="github-tab-indicator"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-teal-500"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {label}
            </Button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            {/* Contribution grid */}
            <div className="flex flex-col gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/50">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Kontribusi {new Date().getFullYear()}
                </h4>
                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {yearTotal} kontribusi
                </span>
              </div>
              <ContributionGrid contributions={yearContributions} />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Streak card (uses proven image API) */}
              <div className="flex flex-col gap-2 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/50">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Aktivitas Kontribusi
                </h4>
                <div className="flex flex-1 items-center justify-center">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${user?.login ?? GITHUB_USERNAME}&background=0e0e0e&ring=2dd4bf&fire=2dd4bf&currStreakNum=ffffff&sideNums=94a3b8&currStreakLabel=2dd4bf&sideLabels=94a3b8&dates=94a3b8`}
                    alt="GitHub streak stats"
                    loading="lazy"
                    className="w-full max-w-full"
                  />
                </div>
              </div>

              {/* Language breakdown */}
              <div className="flex flex-col gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/50">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Bahasa yang Digunakan
                </h4>
                <div className="space-y-3 py-2">
                  {languages.map(([lang, count]) => {
                    const pct = totalLang > 0 ? Math.round((count / totalLang) * 100) : 0;
                    return (
                      <div key={lang}>
                        <div className="mb-1 flex justify-between text-[13px]">
                          <span className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                            <span
                              className={`h-2.5 w-2.5 rounded-full ${
                                languageColors[lang] ?? 'bg-neutral-400'
                              }`}
                            />
                            {lang}
                          </span>
                          <span className="text-neutral-500">{count} repo</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                          <motion.div
                            className={`h-full rounded-full ${
                              languageColors[lang] ?? 'bg-neutral-400'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-xl border border-neutral-200 p-4 transition-all hover:scale-[101%] hover:border-teal-500 dark:border-neutral-900 dark:hover:border-teal-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-medium text-neutral-800 dark:text-neutral-100">
                    <FiFolder size={15} className="text-neutral-400" />
                    {repo.name}
                  </span>
                  <FiExternalLink
                    size={14}
                    className="text-neutral-400 opacity-0 transition group-hover:opacity-100"
                  />
                </div>
                <p className="line-clamp-2 text-[13px] text-neutral-500 dark:text-neutral-400">
                  {repo.description || 'Tidak ada deskripsi'}
                </p>
                <div className="flex items-center gap-4 text-[12px] text-neutral-500">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          languageColors[repo.language] ?? 'bg-neutral-400'
                        }`}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FiStar size={12} className="text-yellow-400" />
                    {repo.stargazersCount}
                  </span>
                  <span className="flex items-center gap-1">Fork {repo.forksCount}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default GitHubStats;
