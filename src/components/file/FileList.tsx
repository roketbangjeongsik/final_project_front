import { useState, useMemo } from 'react';
import { GenericItemList } from '../common/GenericItemList';
import type { FileItem } from '../../types/file';

export const FileList = ({
  files,
  onSelect,
}: {
  files: FileItem[];
  onSelect: (file: FileItem) => void;
}) => {
  const [selectedType, setSelectedType] = useState<'All' | 'PR' | 'Commit'>('All');

  const filters = useMemo(
    () => [(file: FileItem) => selectedType === 'All' || file.type === selectedType],
    [selectedType]
  );

  return (
    <GenericItemList
      data={files}
      searchBy={file => file.name}
      sortBy={() => 0} // ✅ 정렬 필요 없으면 0 반환
      renderTitle={file => file.name}
      extra={repo => (
        <span className="text-xs px-3 py-1 border rounded-xl bg-surface text-text-description">
          {repo.type}
        </span>
      )}
      renderSubtitle={file =>
        `${file.author} / ${new Date(file.updated_at).toLocaleDateString('ko-KR')}`
      }
      onSelect={onSelect}
      sorts={[]} // ✅ 정렬 제거
      filters={filters}
      extraFilters={
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value as 'All' | 'PR' | 'Commit')}
          className="border border-border rounded-lg focus:border-primary focus:outline-none px-4 py-2"
        >
          <option value="All">전체</option>
          <option value="PR">PR</option>
          <option value="Commit">Commit</option>
        </select>
      }
    />
  );
};
