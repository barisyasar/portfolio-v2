'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import { parseAsInteger, useQueryState } from 'nuqs';

const VALID_POSTS_PER_PAGE = [1, 6, 10, 15];

interface PostsPerPageSelectProps {
  startTransition: (fn: () => void) => void;
  isLoading: boolean;
}

export function PostsPerPageSelect({
  startTransition,
  isLoading,
}: PostsPerPageSelectProps) {
  const t = useTranslations('BlogPage');

  const [postsPerPage, setPostsPerPage] = useQueryState(
    'postsPerPage',
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
      startTransition,
    }),
  );
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
      startTransition,
    }),
  );

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">
        {t('postsPerPage')}:
      </span>
      <Select
        disabled={isLoading}
        value={postsPerPage?.toString() ?? '1'}
        onValueChange={(value) => {
          setPostsPerPage(Number(value));
          setPage(1);
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
