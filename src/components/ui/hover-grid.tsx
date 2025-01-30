'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

const HoverGrid = ({
  children,
  className,
  childrenClassNames,
}: {
  children: ReactNode[];
  className?: string;
  childrenClassNames?: string[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={className}>
      {children.map((child, idx: number) => (
        <div
          key={idx}
          className={cn(
            'group relative block h-full w-full p-2',
            childrenClassNames?.[idx],
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 -z-10 block h-full w-full rounded-lg bg-card-foreground/20 dark:bg-card-foreground/50"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {child}
        </div>
      ))}
    </div>
  );
};
export default HoverGrid;
