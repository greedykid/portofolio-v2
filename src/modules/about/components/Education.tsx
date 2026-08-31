import { FiAward, FiBookOpen } from 'react-icons/fi';
import { CERTIFICATES, EDUCATION } from '@/common/constant/data';
import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';

const Education = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Pendidikan" />
      </div>
      <div className="space-y-4">
        {EDUCATION.map((edu, index) => (
          <Card
            key={index}
            className="flex gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900"
          >
            <div className="mt-1.5 flex h-14 w-14 items-center justify-center rounded bg-neutral-50 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <FiBookOpen size={26} />
            </div>
            <div className="w-4/5 space-y-3">
              <div className="space-y-1">
                <h6 className="font-medium text-neutral-800 dark:text-neutral-200">
                  {edu.degree}
                </h6>
                <div className="flex flex-col gap-1 text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:items-center md:gap-2">
                  <span>{edu.institution}</span>
                  <span className="hidden text-neutral-300 dark:text-neutral-700 lg:block">
                    •
                  </span>
                  <span className="text-neutral-500">{edu.score}</span>
                </div>
              </div>
              <ul className="ml-5 list-disc space-y-1 text-sm leading-normal text-neutral-600 dark:text-neutral-400">
                {edu.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <div className="pt-4">
        <SectionHeading title="Sertifikasi" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {CERTIFICATES.map((cert, index) => (
            <Card
              key={index}
              className="space-y-1 p-5 border border-neutral-200 dark:border-neutral-900"
            >
              <div className="flex items-center gap-3 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-neutral-50 text-teal-600 dark:bg-neutral-800 dark:text-teal-400">
                  <FiAward size={18} />
                </div>
                {cert.title}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {cert.issuer} · {cert.date}
              </div>
              <div className="text-[13px] text-neutral-400 dark:text-neutral-500">
                No. {cert.credentialId}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
