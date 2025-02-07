'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import BLOG_CATEGORIES from '@/constants/blogCategories';
import { useTranslations } from 'next-intl';
import { useQueryState } from 'nuqs';

interface CategorySelectProps {
  startTransition: (fn: () => void) => void;
  isLoading: boolean;
}

export function CategorySelect({
  startTransition,
  isLoading,
}: CategorySelectProps) {
  const t = useTranslations('BlogPage');
  const [category, setCategory] = useQueryState('category', {
    defaultValue: 'all',
    shallow: false,
    startTransition,
  });

  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <span className="text-sm text-muted-foreground">{t('category')}:</span>
      <Select
        disabled={isLoading}
        value={category}
        onValueChange={(value) => {
          setCategory(value);
        }}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {BLOG_CATEGORIES.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
