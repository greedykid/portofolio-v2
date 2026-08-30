'use client';

import clsx from 'clsx';
import { Children, ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
  className?: string;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
  className,
}: InfiniteLoopSliderProps) => {
  return (
    <div className={clsx('flex overflow-hidden', className)}>
      <div
        className={clsx(
          'flex w-max gap-4',
          isReverse ? 'animate-[loopReverse_100s_linear_infinite]' : 'animate-[loop_100s_linear_infinite]',
        )}
      >
        {Children.toArray(children)}
        {Children.toArray(children)}
      </div>
    </div>
  );
};

export default InfiniteLoopSlider;
