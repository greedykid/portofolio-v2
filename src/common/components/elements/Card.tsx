import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <div
      className={`rounded-xl bg-white shadow-sm transition-all duration-300 dark:bg-[#1e1e1e] ${className}`}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
