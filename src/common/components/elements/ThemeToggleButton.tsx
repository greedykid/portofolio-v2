'use client';

import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/common/context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme, isHydrated } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-md border p-2 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900"
      aria-label="Toggle theme"
    >
      {isHydrated ? isDark ? <FiMoon size={18} /> : <FiSun size={18} /> : <span className="h-[18px] w-[18px]" />}
    </button>
  );
};

export default ThemeToggleButton;
