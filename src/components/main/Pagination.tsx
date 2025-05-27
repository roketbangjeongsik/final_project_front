interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange?.(page)}
          className={`
            px-2 py-1 
            text-xs        /* 모바일: 텍스트-xs, 패딩 0.5rem */
            md:text-base   /* PC    : 텍스트-base, 패딩 0.5rem */
            xl:text-lg     /* MacBook: 텍스트-lg, 패딩 0.5rem */
            md:px-3        /* PC부터: 수평 패딩 0.75rem */
            xl:px-4        /* MacBook부터: 수평 패딩 1rem */
            ${page === currentPage 
              ? 'font-semibold text-primary' 
              : 'text-text-default'}
            focus:outline-none
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}