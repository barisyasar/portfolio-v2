'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface SortSelectProps {
  label: string;
  newestLabel: string;
  oldestLabel: string;
}

export function SortSelect({
  label,
  newestLabel,
  oldestLabel,
}: SortSelectProps) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(pathname);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <Select
        defaultValue={searchParams.get('sort') || 'newest'}
        onValueChange={(value) => {
          router.push(`${pathname}?${createQueryString('sort', value)}`);
        }}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">{newestLabel}</SelectItem>
          <SelectItem value="oldest">{oldestLabel}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
