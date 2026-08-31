'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  [propName: string]: unknown;
}

const Card = ({
  children,
  className = '',
  hoverScale = 1.0,
  ...others
}: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      className={`rounded-xl bg-white shadow-sm transition-all duration-300 dark:bg-[#1e1e1e] ${className}`}
      {...others}
    >
      {children}
    </motion.div>
  );
};

export default Card;
