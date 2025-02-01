'use client';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 200);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Button
        size="icon"
        className={cn(
          'rounded-full transition-transform duration-300 hover:translate-y-[-2px]',
        )}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp className="size-4" />
      </Button>
    </motion.div>
  );
}
