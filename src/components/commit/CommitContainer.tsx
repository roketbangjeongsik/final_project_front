import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommitsByPr, fetchCommitDiff } from '../../api/commit';
import type { Commit } from '../../types/commit';
import { CommitList } from './CommitList';
import { fetchCodeReviewResult } from '../../api/review';

export const CommitContainer = () => {
  const navigate = useNavigate();
  const { owner, repo, prNumber } = useParams();
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommitsByPr(owner!, repo!, prNumber!)
      .then(setCommits)
      .finally(() => setLoading(false));
  }, [owner, repo, prNumber]);

  const handleCommitSelect = async (commit: Commit) => {
    try {
      const patchString = await fetchCommitDiff(owner!, repo!, commit.sha);
      const description = await fetchCodeReviewResult(patchString);

      navigate('/review-result', {
        state: {
          diff: patchString,
          content: {
            description,
            refactor: '', // 탭 전환시 로드
          },
        },
      });
    } catch (error) {
      console.error('리뷰 요청 실패:', error);
    }
  };

  if (loading) return <div>커밋 목록 불러오는 중...</div>;

  return <CommitList commits={commits} onSelect={handleCommitSelect} />;
};
