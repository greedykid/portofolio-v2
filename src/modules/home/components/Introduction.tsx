import { PROFILE, STATS } from '@/common/constant/data';
import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';

const Introduction = () => {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-3">
        <div className="flex gap-2 text-2xl font-medium lg:text-3xl">
          <h1>Hi, I&apos;m {PROFILE.name}</h1>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10">
          <li>
            {PROFILE.location}
          </li>
          <li>{PROFILE.availability.split('(')[1]?.replace(')', '') || 'Available for work'}</li>
        </ul>
      </div>

      <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
        {PROFILE.bio}
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat, index) => (
          <Card key={index} className="p-4 text-center">
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              {stat.number}
            </div>
            <div className="mt-1 text-[13px] text-neutral-500 dark:text-neutral-400">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
