import Link from 'next/link';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

import { PROFILE, SOCIAL_MEDIA } from '@/common/constant/data';
import SectionHeading from '@/common/components/elements/SectionHeading';
import Card from '@/common/components/elements/Card';

const CONTACT_ITEMS = [
  { label: 'Email', href: SOCIAL_MEDIA.email, icon: <FiMail size={20} /> },
  { label: 'GitHub', href: SOCIAL_MEDIA.github, icon: <FiGithub size={20} /> },
  { label: 'LinkedIn', href: SOCIAL_MEDIA.linkedin, icon: <FiLinkedin size={20} /> },
];

const Contact = () => {
  return (
    <section id="contact" className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="Mari Berkolaborasi" />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          Saya terbuka untuk peluang kerja, proyek freelance, dan kolaborasi.
          Silakan hubungi saya dan mari kita diskusikan bagaimana saya bisa
          membantu.
        </p>
      </div>

      <Card className="space-y-4 rounded-xl border border-neutral-200 p-8 dark:border-none dark:bg-[#1e1e1e]">
        <div className="text-xl font-medium text-neutral-800 dark:text-neutral-200">
          Punya proyek? Mari kerjakan bersama!
        </div>
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          {PROFILE.availability}
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CONTACT_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 p-4 text-center transition hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
            >
              <span className="text-neutral-600 dark:text-neutral-300">{item.icon}</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Contact;
