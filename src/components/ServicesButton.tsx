'use client';
import { Button } from '@/components/ui/button';
import { ChevronsDown } from 'lucide-react';

function ServicesButton() {
  return (
    <Button
      onClick={() => {
        const techStack = document.getElementById('what-can-i-do');
        techStack?.scrollIntoView({ behavior: 'smooth' });
      }}
      variant={'link'}
      className="block h-12 w-12 p-0"
    >
      <ChevronsDown className="!size-full animate-bounce" />
    </Button>
  );
}

export default ServicesButton;
