import Link from 'next/link';
import { FiGithub, FiMail, FiLinkedin, FiMessageCircle } from 'react-icons/fi';

import { SOCIAL_MEDIA } from '@/common/constant/data';

const socials = [
  { title: 'Email', href: SOCIAL_MEDIA.email, icon: <FiMail size={18} /> },
  { title: 'GitHub', href: SOCIAL_MEDIA.github, icon: <FiGithub size={18} /> },
  { title: 'LinkedIn', href: SOCIAL_MEDIA.linkedin, icon: <FiLinkedin size={18} /> },
  { title: 'WhatsApp', href: SOCIAL_MEDIA.whatsapp, icon: <FiMessageCircle size={18} /> },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="mb-2 ml-2 mt-1 text-sm text-neutral-600 dark:text-neutral-500">
        Let&apos;s Connect
      </div>
      <div className="flex items-center gap-4 px-6 pt-2 lg:gap-3 lg:px-2">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:text-teal-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
