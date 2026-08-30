'use client';

import { motion } from 'framer-motion';
import { FiBarChart2, FiGithub } from 'react-icons/fi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';
import { SKILL_LEVELS } from '@/common/constant/data';

const CATEGORY_COLORS: Record<string, string> = {
  Web: 'bg-teal-500',
  IT: 'bg-indigo-500',
  Tools: 'bg-amber-500',
};

const Statistics = () => {
  return (
    <section id="stats" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Statistik & Kemampuan" icon={<FiBarChart2 size={20} />} />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Perkiraan tingkat penguasaan teknologi dan aktivitas kontribusi di
          GitHub.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-900">
          <h3 className="mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Tingkat Penguasaan Skill
          </h3>
          <div className="space-y-3">
            {SKILL_LEVELS.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between text-[13px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {skill.name}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                  <motion.div
                    className={`h-full rounded-full ${CATEGORY_COLORS[skill.category] ?? 'bg-neutral-500'}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-900">
          <div className="flex items-center gap-2">
            <FiGithub size={20} />
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              Kontribusi GitHub
            </h3>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
            <img
              src="https://ghchart.rshah.org/greedykid"
              alt="Kontribusi GitHub Rizki Arbiansyah"
              className="w-full max-w-full"
              loading="lazy"
            />
          </div>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-500">
            Statistik kontribusi terbaru dari akun GitHub{' '}
            <span className="font-medium">@greedykid</span>.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Statistics;
