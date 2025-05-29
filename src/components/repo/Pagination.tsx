type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => (
  <div className="flex justify-center p-6 space-x-2">
    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-3 py-1 rounded ${
          page === currentPage ? 'font-bold text-text-default' : 'text-text-description'
        }`}
      >
        {page}
      </button>
    ))}
  </div>
);
