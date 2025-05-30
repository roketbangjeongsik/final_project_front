import { Pagination } from './Pagination';
import { GenericCard } from './GenericCard';
import { ItemFilterBar } from './ItemFilterBar';
import { usePaginatedFilterSort } from '../../hooks/usePaginatedFilterSort';

type Props<T> = {
  data: T[];
  searchBy: (item: T) => string;
  sortBy: (a: T, b: T, sort: string) => number;
  renderTitle: (item: T) => string;
  renderSubtitle: (item: T) => string;
  onSelect: (item: T) => void;
  sorts: { label: string; value: string }[];
  filters?: ((item: T) => boolean)[];
  extraFilters?: React.ReactNode;
  extra?: (item: T) => React.ReactNode;
};

export const GenericItemList = <T,>({
  data,
  searchBy,
  sortBy,
  renderTitle,
  renderSubtitle,
  onSelect,
  sorts,
  filters,
  extraFilters,
  extra,
}: Props<T>) => {
  const { search, setSearch, sort, setSort, currentPage, setCurrentPage, totalPages, pageItems } =
    usePaginatedFilterSort({ data, searchBy, sortBy, filters });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <ItemFilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        sorts={sorts}
        extraFilters={extraFilters}
      />

      <div className="flex-1 overflow-y-auto">
        {pageItems.map(item => (
          <GenericCard
            key={searchBy(item)}
            item={item}
            title={renderTitle(item)}
            subtitle={renderSubtitle(item)}
            extra={extra?.(item)}
            onSelect={onSelect}
          />
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};
