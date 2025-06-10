import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommitsByPr } from '../../api/commit';
import type { Commit } from '../../types/commit';
import { CommitList } from './CommitList';

export const CommitContainer = () => {
  const { owner, repo, prNumber } = useParams();
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommitsByPr(owner!, repo!, prNumber!)
      .then(setCommits)
      .finally(() => setLoading(false));
  }, [owner, repo, prNumber]);

  if (loading) return <div>커밋 목록 불러오는 중...</div>;

  return <CommitList commits={commits} onSelect={commit => console.log(commit)} />;
};
