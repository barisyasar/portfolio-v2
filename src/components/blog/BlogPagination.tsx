'use client';
import { parseAsInteger, useQueryState } from 'nuqs';
import {
  Pagination,
  PaginationPrevious,
  PaginationItem,
  PaginationContent,
  PaginationLink,
  PaginationNext,
} from '../ui/pagination';

function BlogPagination({
  totalPages,
  startTransition,
  isLoading,
}: {
  totalPages: number;
  startTransition: (fn: () => void) => void;
  isLoading: boolean;
}) {
  const [currentPage, setCurrentPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
      startTransition,
    }),
  );

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
            onClick={() => {
              if (!isLoading) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={currentPage === page}
              onClick={() => {
                if (!isLoading) {
                  setCurrentPage(page);
                }
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={
              currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''
            }
            onClick={() => {
              if (!isLoading) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default BlogPagination;
