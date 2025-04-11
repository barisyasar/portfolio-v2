'use client';
import { Button } from '@/components/ui/button';
import { sendGAEvent } from '@next/third-parties/google';
import { ChevronsDown } from 'lucide-react';

function RecapButton() {
  return (
    <Button
      onClick={() => {
        const recap = document.getElementById('recap');
        recap?.scrollIntoView({ behavior: 'smooth' });
        sendGAEvent('event', 'button_clicked', {
          value: 'recap',
        });
      }}
      variant={'link'}
      className="block h-12 w-12 p-0"
      name="scroll-down"
    >
      <ChevronsDown className="!size-full animate-bounce" />
    </Button>
  );
}

export default RecapButton;
