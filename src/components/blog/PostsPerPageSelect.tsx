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

const VALID_POSTS_PER_PAGE = [6, 10, 15];

interface PostsPerPageSelectProps {
  label: string;
}

export function PostsPerPageSelect({ label }: PostsPerPageSelectProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
        defaultValue={searchParams.get('postsPerPage') || '6'}
        onValueChange={(value) => {
          router.push(
            `${pathname}?${createQueryString('postsPerPage', value)}`,
          );
        }}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {VALID_POSTS_PER_PAGE.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
