import { GenericItemList } from '../common/GenericItemList';
import type { Commit } from '../../types/commit';

export const CommitList = ({
  commits,
  onSelect,
}: {
  commits: Commit[];
  onSelect: (commit: Commit) => void;
}) => {
  return (
    <GenericItemList
      data={commits}
      searchBy={commit => commit.commit.message}
      sortBy={(a, b, sort) =>
        sort === 'date'
          ? new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime()
          : a.commit.message.localeCompare(b.commit.message)
      }
      renderTitle={commit => commit.commit.message}
      renderSubtitle={commit =>
        `${commit.commit.author.name} · ${new Date(commit.commit.author.date).toLocaleDateString('ko-KR')}`
      }
      onSelect={onSelect}
      sorts={[
        { label: '날짜순', value: 'date' },
        { label: '메시지순', value: 'message' },
      ]}
    />
  );
};
