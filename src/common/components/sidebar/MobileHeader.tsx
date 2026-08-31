'use client';

import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail, FiBookOpen } from 'react-icons/fi';

import { PROFILE } from '@/common/constant/data';
import { Button } from '@/components/animate-ui/primitives/buttons/button';
import ThemeToggleButton from '../elements/ThemeToggleButton';
import SocialMedia from '../elements/SocialMedia';

const NAV_ITEMS = [
  { title: 'Home', href: '/', id: 'home', icon: <FiHome size={18} /> },
  { title: 'About', href: '/#about', id: 'about', icon: <FiUser size={18} /> },
  { title: 'Projects', href: '/#projects', id: 'projects', icon: <FiFolder size={18} /> },
  { title: 'Blog', href: '/blog', id: 'blog', icon: <FiBookOpen size={18} /> },
  { title: 'Contact', href: '/#contact', id: 'contact', icon: <FiMail size={18} /> },
];

const MobileHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  const isBlogPage = pathname === '/blog' || pathname.startsWith('/blog/');
  const active = isBlogPage ? 'blog' : pathname === '/' ? activeId : 'home';

  const handleClick = (id: string) => {
    setActiveId(id);
    setOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 lg:hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-light px-5 py-3 dark:border-neutral-800 dark:bg-dark">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/profile.svg"
            alt={PROFILE.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border-2 border-neutral-300 dark:border-neutral-600"
          />
          <span className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
            {PROFILE.name}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <Button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            hoverScale={1.05}
            tapScale={0.92}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-transparent text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </Button>
        </div>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-neutral-200 bg-light dark:border-neutral-800 dark:bg-dark"
          >
            <div className="px-5 pb-5">
              <nav className="space-y-1 py-3">
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => handleClick(item.id)}
                      className={clsx(
                        'relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] transition-colors',
                        isActive
                          ? 'text-neutral-900 dark:text-neutral-100'
                          : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobile-nav-active-indicator"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                          className="absolute inset-0 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                        />
                      )}
                      <span className="relative flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <SocialMedia />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
