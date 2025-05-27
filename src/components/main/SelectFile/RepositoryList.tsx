import React from 'react';
import RepositoryItem from './RepositoryItem';

interface Repository {
  id: number;
  name: string;
  language: string;
  updatedAt: string;
  isPublic?: boolean;
}

const dummyData: Repository[] = [
  { id: 1, name: 'Repository 1', language: 'Java', updatedAt: '' },
  { id: 2, name: 'Repository 2', language: 'Python', updatedAt: '' },
  { id: 3, name: 'Repository 3', language: 'HTML', updatedAt: '' },
  { id: 4, name: 'Repository 4', language: 'JavaScript', updatedAt: '' },
  { id: 5, name: 'Repository 5', language: 'TypeScript', updatedAt: '' },
  { id: 6, name: 'Repository 6', language: 'C++', updatedAt: '' },
  { id: 7, name: 'Repository 7', language: 'Go', updatedAt: '' },
  { id: 8, name: 'Repository 8', language: 'Ruby', updatedAt: '' },
  { id: 9, name: 'Repository 9', language: 'Swift', updatedAt: '' },
  { id: 10, name: 'Repository 10', language: 'Kotlin', updatedAt: '' },
];

const ITEMS_PER_PAGE = 4;

const RepositoryList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  return (
    <div className="divide-y divide-border">
      {currentItems.map((repo) => (
        <RepositoryItem
          key={repo.id}
          name={repo.name}
          language={repo.language}
          updatedAt={repo.updatedAt}
          isPublic={repo.isPublic}
        />
      ))}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}
            type="button"
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;