import { GenericItemList } from '../common/GenericItemList';
import type { PullRequest } from '../../types/pr';

export const PullRequestList = ({
  prs,
  onSelect,
}: {
  prs: PullRequest[];
  onSelect: (pr: PullRequest) => void;
}) => {
  return (
    <GenericItemList
      data={prs}
      searchBy={pr => `${pr.title} ${pr.user.login} #${pr.number}`.toLowerCase()}
      sortBy={(a, b, sort) =>
        sort === 'created_at'
          ? new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          : a.title.localeCompare(b.title)
      }
      renderTitle={pr => pr.title}
      renderSubtitle={pr =>
        `#${pr.number} · ${pr.user.login} / ${new Date(pr.created_at).toLocaleDateString('ko-KR')}`
      }
      onSelect={onSelect}
      sorts={[
        { label: '생성일순', value: 'created_at' },
        { label: '이름순', value: 'title' },
      ]}
    />
  );
};
