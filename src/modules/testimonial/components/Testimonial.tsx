import { FiMessageSquare } from 'react-icons/fi';

import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';
import { TESTIMONIALS } from '@/common/constant/data';

const Testimonial = () => {
  return (
    <section id="testimonials" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Apa Kata Mereka" icon={<FiMessageSquare size={20} />} />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Beberapa kesan dan pendapat dari orang-orang yang pernah bekerja sama
          dengan saya.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <Card
            key={index}
            className="flex h-full flex-col gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-900"
          >
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.avatar}
                alt={item.name}
                width={44}
                height={44}
                className="rounded-full border border-neutral-300 dark:border-neutral-700"
              />
              <div>
                <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {item.name}
                </div>
                <div className="text-[13px] text-neutral-500 dark:text-neutral-400">
                  {item.role}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
