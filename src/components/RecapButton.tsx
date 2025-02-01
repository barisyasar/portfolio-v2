'use client';
import { Button } from '@/components/ui/button';
import { ChevronsDown } from 'lucide-react';

function RecapButton() {
  return (
    <Button
      onClick={() => {
        const recap = document.getElementById('recap');
        recap?.scrollIntoView({ behavior: 'smooth' });
      }}
      variant={'link'}
      className="block h-12 w-12 p-0"
    >
      <ChevronsDown className="!size-full animate-bounce" />
    </Button>
  );
}

export default RecapButton;
