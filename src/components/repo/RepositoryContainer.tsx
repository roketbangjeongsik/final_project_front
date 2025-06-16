import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Repository } from '../../types/repository';
import { fetchUserRepositories } from '../../api/repository';
import { RepositoryList } from './RepositoryList';

export const RepositoryContainer = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repos = await fetchUserRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('레포지토리 불러오기 실패 :', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) return <div>로딩중...</div>;

  return (
    <RepositoryList
      repositories={repositories}
      onSelect={repo => navigate(`/repos/${repo.owner.login}/${repo.name}/prs`)}
    />
  );
};
