import { useState } from 'react';
import { fetchKakaoSearch } from '../../api/kakao';
import { decodeAndSanitize } from '../../utils/html';
import { SkeletonItem } from '../common/SkeletonItem';

type Result = {
  id: number;
  title: string;
  contents: string;
  url: string;
  datetime: string;
};

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const SearchPanel = ({ visible, onClose }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    try {
      const data = await fetchKakaoSearch(query);
      setResults(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('검색 결과', results);

  const panelClass =
    'fixed bottom-20 right-6 w-full max-w-xl bg-white border border-border rounded shadow-lg p-4 z-50 transition-all duration-300 ' +
    (visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none');

  return (
    <div className={panelClass}>
      <div className="flex items-center space-x-2 gap-2 mb-2">
        <input
          className="flex-1 border focus:outline-none focus:border-primary px-3 py-1 rounded text-sm"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="검색어 입력..."
        />
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-hover"
        >
          검색
        </button>
        <button
          onClick={onClose}
          className="px-3 py-1 border border-border rounded text-sm text-text-description hover:bg-surface transition"
        >
          닫기
        </button>
      </div>

      <ul className="space-y-4 mt-4roundedmax-h-128 overflow-y-auto text-sm">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => <SkeletonItem key={i} />)
          : results.map(item => (
              <li key={item.id} className="border-b border-border hover:bg-surface transition">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs block rounded transition space-y-2 p-3"
                >
                  <div
                    className="font-bold text-primary-hover line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: decodeAndSanitize(item.title) }}
                  />

                  <div
                    className="text-text-default text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: decodeAndSanitize(item.contents) }}
                  />
                  <div className="text-text-description text-xs whitespace-nowrap">
                    {new Date(item.datetime).toLocaleString('ko-KR')}
                  </div>
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};
