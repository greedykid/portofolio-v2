import { FiBarChart2 } from 'react-icons/fi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';

import SkillBars from './SkillBars';

const Statistics = () => {
  return (
    <section id="stats" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Statistik & Kemampuan" icon={<FiBarChart2 size={20} />} />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Perkiraan tingkat penguasaan teknologi dan data real-time dari akun
          GitHub saya.
        </p>
      </div>

      <Card className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-900">
        <h3 className="mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Tingkat Penguasaan Skill
        </h3>
        <SkillBars />
      </Card>
    </section>
  );
};

export default Statistics;
