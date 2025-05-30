import type { Repository } from '../../types/repository';
import { GenericItemList } from '../common/GenericItemList';
import { useState } from 'react';

type Props = {
  repositories: Repository[];
};

export const RepositoryList = ({ repositories }: Props) => {
  const [language, setLanguage] = useState('All');

  const langs = Array.from(new Set(repositories.map(repo => repo.language).filter(Boolean))).sort();

  return (
    <GenericItemList
      data={repositories}
      searchBy={repo => repo.name}
      sortBy={(a, b, sort) =>
        sort === 'Name'
          ? a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
          : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      }
      renderTitle={repo => repo.name}
      renderSubtitle={repo =>
        `${repo.language} / ${new Date(repo.updated_at).toLocaleDateString('ko-KR')}`
      }
      extra={repo => (
        <span className="text-xs px-3 py-1 border rounded-xl bg-surface text-text-description">
          {repo.visibility}
        </span>
      )}
      onSelect={() => {}} // 동작은 추후 구현 예정
      sorts={[
        { label: '이름순', value: 'Name' },
        { label: '최신순', value: 'updated_at' },
      ]}
      extraFilters={
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          className="border border-border focus:border-primary focus:outline-none rounded-lg px-4 py-2"
        >
          <option value="All">모든 언어</option>
          {langs.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      }
      filters={[repo => language === 'All' || repo.language === language]}
    />
  );
};
