'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'ref'> & {
  hoverScale?: number;
  tapScale?: number;
};

function Button({
  hoverScale = 1.05,
  tapScale = 0.95,
  style,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: tapScale }}
      whileHover={{ scale: hoverScale }}
      style={{ WebkitTapHighlightColor: 'transparent', ...style }}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
