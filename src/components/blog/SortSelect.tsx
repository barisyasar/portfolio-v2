'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

interface SortSelectProps {
  locale: string;
  currentSort: string;
  currentPage: number;
  currentPostsPerPage: number;
  label: string;
  newestLabel: string;
  oldestLabel: string;
}

export function SortSelect({
  locale,
  currentSort,
  currentPage,
  currentPostsPerPage,
  label,
  newestLabel,
  oldestLabel,
}: SortSelectProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <Select
        defaultValue={currentSort}
        onValueChange={(value) => {
          router.push(
            `/${locale}/blogs?page=${currentPage}&postsPerPage=${currentPostsPerPage}&sort=${value}`,
          );
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
