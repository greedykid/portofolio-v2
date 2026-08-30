'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiUser, FiFolder, FiMail } from 'react-icons/fi';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import ThemeToggleButton from '../elements/ThemeToggleButton';
import SocialMedia from '../elements/SocialMedia';

const NAV_ITEMS = [
  { title: 'Home', href: '/', icon: <FiHome size={18} /> },
  { title: 'About', href: '/#about', icon: <FiUser size={18} /> },
  { title: 'Projects', href: '/#projects', icon: <FiFolder size={18} /> },
  { title: 'Contact', href: '/#contact', icon: <FiMail size={18} /> },
];

const Navigation = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 lg:px-2">
      <div className="flex items-center justify-between py-4">
        <nav className="hidden lg:flex flex-col space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={clsx(
                'flex items-center gap-2 px-3 py-2 text-[15px] text-neutral-700 transition-colors hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100',
                pathname === item.href && 'text-neutral-800 dark:text-neutral-100',
              )}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-md border p-2 dark:border-neutral-700 dark:bg-neutral-900"
            aria-label="Toggle menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-2 pb-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-[15px] text-neutral-700 dark:text-neutral-400"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      )}

      <div className="space-y-4 pb-6">
        <div className="flex items-center gap-3">
          <SocialMedia />
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navigation;
