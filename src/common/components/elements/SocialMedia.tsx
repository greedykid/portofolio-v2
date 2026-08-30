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
      <div className="flex justify-between px-5 pt-2">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-neutral-700 transition duration-300 hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300 lg:hover:scale-110">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
