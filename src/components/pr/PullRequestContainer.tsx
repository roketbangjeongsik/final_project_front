import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPullRequests } from '../../api/pr';
import type { PullRequest } from '../../types/pr';
import { PullRequestList } from './PullRequestList';

export const PullRequestContainer = () => {
  const navigate = useNavigate();
  const { owner, repo } = useParams();
  const [prs, setPrs] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPRs = async () => {
      try {
        const res = await fetchPullRequests(owner!, repo!);
        setPrs(res);
      } catch (e) {
        console.error('PR 불러오기 실패:', e);
      } finally {
        setLoading(false);
      }
    };
    loadPRs();
  }, [owner, repo]);

  if (loading) return <div>PR목록 불러오는중...</div>;

  return (
    <PullRequestList
      prs={prs}
      onSelect={pr => navigate(`/repos/${owner}/${repo}/pulls/${pr.number}/commits`)}
    />
  );
};
