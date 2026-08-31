'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { HiChevronRight } from 'react-icons/hi';

import Card from '@/common/components/elements/Card';
import { EXPERIENCES } from '@/common/constant/data';

const formatDate = (date: string | null) => {
  if (!date) return 'Present';
  return new Date(date).toLocaleDateString('id-ID', {
    month: 'short',
    year: 'numeric',
  });
};

const Experiences = () => {
  const [showResponsibilities, setShowResponsibilities] = useState<Record<number, boolean>>({});

  return (
    <section className="space-y-5">
      <div className="flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300">
        <h2 className="capitalize">Pengalaman & Pendidikan</h2>
      </div>
      <div className="space-y-4">
        {EXPERIENCES.map((exp, index) => {
          const isOpen = showResponsibilities[index];
          return (
            <Card
              key={index}
              className="flex gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900"
            >
              <div className="mt-1.5 w-fit">
                <div className="flex h-14 w-14 items-center justify-center rounded bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  <FiBriefcase size={26} />
                </div>
              </div>
              <div className="w-4/5 space-y-3">
                <div className="space-y-1">
                  <h6 className="font-medium text-neutral-800 dark:text-neutral-200">
                    {exp.role}
                  </h6>
                  <div className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
                      <span className="underline-offset-2 hover:text-dark hover:underline hover:dark:text-white">
                        {exp.company}
                      </span>
                      <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                        •
                      </span>
                      <span className="text-neutral-500">[ {exp.company_legal_name} ]</span>
                      <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                        •
                      </span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex flex-col gap-2 text-[13px] md:flex-row">
                      <span>
                        {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                      </span>
                      <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                        •
                      </span>
                      <span className="text-neutral-500">{exp.type}</span>
                      <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                        •
                      </span>
                      <span>{exp.location_type}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setShowResponsibilities((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                  className="-ml-1 mt-5 flex items-center gap-1 text-sm text-neutral-500"
                >
                  <HiChevronRight
                    size={18}
                    className={`rotate-90 transition-all duration-300 ${
                      isOpen ? '' : 'rotate-0'
                    }`}
                  />
                  {isOpen ? 'Hide' : 'Show'} Responsibilities
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      className="ml-5 list-disc space-y-1 pb-2 text-sm leading-normal text-neutral-600 dark:text-neutral-400"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {exp.responsibilities.map((item) => (
                        <motion.li key={item} layout>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
