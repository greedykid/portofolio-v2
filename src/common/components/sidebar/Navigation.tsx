'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiUser, FiFolder, FiMail, FiBookOpen } from 'react-icons/fi';

import SocialMedia from '../elements/SocialMedia';
import Breakline from '../elements/Breakline';
import ThemeToggleButton from '../elements/ThemeToggleButton';

const NAV_ITEMS = [
  { title: 'Home', href: '/', icon: <FiHome size={18} /> },
  { title: 'About', href: '/#about', icon: <FiUser size={18} /> },
  { title: 'Projects', href: '/#projects', icon: <FiFolder size={18} /> },
  { title: 'Blog', href: '/blog', icon: <FiBookOpen size={18} /> },
  { title: 'Contact', href: '/#contact', icon: <FiMail size={18} /> },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/';
  return pathname === href;
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 lg:px-2">
      <nav className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.title}
              href={item.href}
              className={clsx(
                'flex items-center gap-2.5 rounded-lg px-3 py-2 text-[15px] transition-colors',
                active
                  ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
              )}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <Breakline className="mx-1" />
      <SocialMedia />

      <div className="flex items-center gap-2 px-3 pt-1">
        <span className="text-sm text-neutral-600 dark:text-neutral-500">Theme</span>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navigation;
