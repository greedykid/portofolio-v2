'use client';

import { memo, useEffect, useState } from 'react';

import InfiniteLoopSlider from '@/common/components/elements/InfiniteLoopSlider';
import { TECH_STACK } from '@/common/constant/data';

const Tag = memo(({ title }: { title: string }) => (
  <div className="mr-3 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50">
    <span>{title}</span>
  </div>
));

const TechStack = () => {
  const [skills, setSkills] = useState<string[]>([]);

  useEffect(() => {
    setSkills([...TECH_STACK].sort(() => Math.random() - 0.5));
  }, []);

  if (skills.length === 0) return null;

  const sliders = [0, 1].map((_, index) => {
    const sliderSkills = [...skills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map((skill, idx) => (
          <Tag key={idx} title={skill} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <section className="space-y-4">
      <div className="relative flex w-full flex-col justify-start gap-y-4 overflow-hidden py-2">
        {sliders}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-light via-transparent to-light dark:from-dark dark:via-transparent dark:to-dark" />
      </div>
    </section>
  );
};

export default TechStack;
