import { useEffect, useState } from 'react';

type Options<T> = {
  data: T[];
  searchBy: (item: T) => string;
  sortBy: (a: T, b: T, sort: string) => number;
  filters?: ((item: T) => boolean)[];
  defaultSort?: string;
};

export const usePaginatedFilterSort = <T>({
  data,
  searchBy,
  sortBy,
  filters = [],
  defaultSort = 'Name',
}: Options<T>) => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(defaultSort);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  const filtered = data
    .filter(item => searchBy(item).toLowerCase().includes(search.toLowerCase()))
    .filter(item => filters.every(f => f(item)))
    .sort((a, b) => sortBy(a, b, sort));

  const totalPages = Math.ceil(filtered.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    const update = () => {
      const availH = window.innerHeight - 300;
      const cardH = 120;
      setCardsPerPage(Math.max(Math.floor(availH / cardH), 1));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sort]);

  return {
    search,
    setSearch,
    sort,
    setSort,
    currentPage,
    setCurrentPage,
    totalPages,
    pageItems,
  };
};
