'use client';

import { motion } from 'framer-motion';
import { SKILL_LEVELS } from '@/common/constant/data';

const CATEGORY_COLORS: Record<string, string> = {
  Web: 'bg-teal-500',
  IT: 'bg-indigo-500',
  Tools: 'bg-amber-500',
};

const SkillBars = () => {
  return (
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
  );
};

export default SkillBars;
