'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'motion/react';
import { FiHome, FiUser, FiFolder, FiMail, FiBookOpen } from 'react-icons/fi';

import SocialMedia from '../elements/SocialMedia';
import Breakline from '../elements/Breakline';
import ThemeToggleButton from '../elements/ThemeToggleButton';

const NAV_ITEMS = [
  { title: 'Home', href: '/', id: 'home', icon: <FiHome size={18} /> },
  { title: 'About', href: '/#about', id: 'about', icon: <FiUser size={18} /> },
  { title: 'Projects', href: '/#projects', id: 'projects', icon: <FiFolder size={18} /> },
  { title: 'Blog', href: '/blog', id: 'blog', icon: <FiBookOpen size={18} /> },
  { title: 'Contact', href: '/#contact', id: 'contact', icon: <FiMail size={18} /> },
];

const isHomePage = (pathname: string) => pathname === '/';

const Navigation = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>('home');

  // Saat pindah halaman/blog, reset aktif ke item bersangkutan
  const isBlogPage = pathname === '/blog' || pathname.startsWith('/blog/');
  const active = isBlogPage
    ? 'blog'
    : isHomePage(pathname)
      ? activeId
      : NAV_ITEMS.find((i) => pathname.startsWith(i.href.replace('#', '')))?.id ?? 'home';

  const handleClick = (id: string) => {
    if (isHomePage(pathname)) setActiveId(id);
  };

  return (
    <div className="space-y-4 lg:px-2">
      <nav className="flex flex-col space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => handleClick(item.id)}
              className={clsx(
                'relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-[15px] transition-colors',
                isActive
                  ? 'text-neutral-900 dark:text-neutral-100'
                  : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100',
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-indicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative flex items-center gap-2.5">
                {item.icon}
                <span>{item.title}</span>
              </span>
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
