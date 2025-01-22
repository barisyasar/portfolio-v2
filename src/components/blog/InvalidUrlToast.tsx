'use client';

import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

interface InvalidUrlToastProps {
  message: string;
}

export function InvalidUrlToast({ message }: InvalidUrlToastProps) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      variant: 'destructive',
      title: 'Invalid URL',
      description: message,
    });
  }, [message, toast]);

  return null;
}
