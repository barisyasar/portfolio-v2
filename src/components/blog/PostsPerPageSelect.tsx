'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const VALID_POSTS_PER_PAGE = [6, 10, 15];

interface PostsPerPageSelectProps {
  locale: string;
  currentPostsPerPage: number;
  label: string;
}

export function PostsPerPageSelect({
  locale,
  currentPostsPerPage,
  label,
}: PostsPerPageSelectProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <Select
        defaultValue={currentPostsPerPage.toString()}
        onValueChange={(value) => {
          router.push(`/${locale}/blogs?page=1&postsPerPage=${value}`);
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
