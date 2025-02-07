'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import { useQueryState } from 'nuqs';

interface SortSelectProps {
  startTransition: (fn: () => void) => void;
  isLoading: boolean;
}

export function SortSelect({ startTransition, isLoading }: SortSelectProps) {
  const t = useTranslations('BlogPage');
  const [sort, setSort] = useQueryState('sort', {
    defaultValue: 'newest',
    shallow: false,
    startTransition,
  });

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{t('sortBy')}:</span>
      <Select
        disabled={isLoading}
        value={sort}
        onValueChange={(value) => setSort(value)}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">{t('newest')}</SelectItem>
          <SelectItem value="oldest">{t('oldest')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
