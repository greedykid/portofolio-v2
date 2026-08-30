import { SERVICES } from '@/common/constant/data';
import { getIcon } from '@/common/helpers/icons';
import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';

const Services = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Layanan yang Saya Tawarkan" />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Saya membantu brand, perusahaan, institusi, dan startup dalam
          menciptakan pengalaman digital yang luar biasa melalui layanan
          pengembangan strategis.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {SERVICES.map((service, index) => (
          <Card
            key={index}
            className="space-y-3 rounded-xl border border-neutral-200 p-5 dark:border-none dark:bg-[#1e1e1e]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              {service.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
