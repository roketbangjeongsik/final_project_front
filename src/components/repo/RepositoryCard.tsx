import type { Repository } from '../../types/repository';

type Props = {
  repo: Repository;
};

export const RepositoryCard = ({ repo }: Props) => (
  <div className="flex justify-between items-center px-5 py-6 rounded-lg bg-white border-b border-border first:border-t">
    <div className="flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text-default">
        {repo.name}
        <span className="text-xs ml-4 px-3 py-1 border rounded-xl bg-surface text-text-description">
          {repo.visibility}
        </span>
      </h2>
      <p className="text-sm text-text-description">
        {repo.language} / {repo.updated_at}
      </p>
    </div>
    <button className="bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary-hover transition">
      선택
    </button>
  </div>
);
