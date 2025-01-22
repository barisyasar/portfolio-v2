'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

interface CategorySelectProps {
  locale: string;
  currentCategory: string;
  currentPage: number;
  currentPostsPerPage: number;
  currentSort: string;
  label: string;
  categories: {
    value: string;
    label: string;
  }[];
}

export function CategorySelect({
  locale,
  currentCategory,
  currentPostsPerPage,
  currentSort,
  label,
  categories,
}: CategorySelectProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <Select
        defaultValue={currentCategory}
        onValueChange={(value) => {
          router.push(
            `/${locale}/blogs?page=1&postsPerPage=${currentPostsPerPage}&sort=${currentSort}&category=${value}`,
          );
        }}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
