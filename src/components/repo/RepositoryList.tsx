import { useEffect, useRef, useState } from 'react';
import type { Repository } from '../../types/repository';
import { FilterBar } from './FilterBar';
import { RepositoryCard } from './RepositoryCard';
import { Pagination } from './Pagination';

type Props = { repositories: Repository[] };

export const RepositoryList = ({ repositories }: Props) => {
  const [search, setSearch] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState('Name');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 필터/정렬
  const langs = Array.from(new Set(repositories.map(repo => repo.language).filter(Boolean))).sort();
  const filtered = repositories
    .filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()))
    .filter(repo => (language === 'All' ? true : repo.language === language))
    .sort((a, b) =>
      sort === 'Name'
        ? a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
        : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  // 카드 개수 계산
  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !filterRef.current || !paginationRef.current || !cardRef.current)
        return;

      const containerH = containerRef.current.clientHeight;
      const filterH = filterRef.current.getBoundingClientRect().height;
      const paginationH = paginationRef.current.getBoundingClientRect().height;
      const cardH = cardRef.current.getBoundingClientRect().height;
      const availH = containerH - filterH - paginationH;
      const count = Math.max(Math.floor(availH / cardH), 1);

      setCardsPerPage(count);
      setCurrentPage(1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [search, language, sort, repositories]);

  // 페이지네이션
  const totalPages = Math.ceil(filtered.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const pageItems = filtered.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div ref={containerRef} className="flex flex-col h-full overflow-hidden">
      <div ref={filterRef}>
        <FilterBar
          search={search}
          setSearch={setSearch}
          language={language}
          setLanguage={setLanguage}
          sort={sort}
          setSort={setSort}
          languages={langs}
        />
      </div>

      <div className="flex flex-1 flex-col ">
        {pageItems.map((repo, idx) => (
          <div key={repo.id} ref={idx === 0 ? cardRef : undefined}>
            <RepositoryCard repo={repo} />
          </div>
        ))}
      </div>

      <div ref={paginationRef} className="mt-auto">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
