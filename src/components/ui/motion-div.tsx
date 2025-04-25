'use client';

import { motion, MotionProps } from 'framer-motion';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type MotionDivProps = ComponentPropsWithoutRef<'div'> & MotionProps;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = 'MotionDiv';

export { MotionDiv };
