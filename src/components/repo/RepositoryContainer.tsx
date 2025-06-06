import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Repository } from '../../types/repository';
import { fetchUserRepositories } from '../../api/repository';
import { RepositoryList } from './RepositoryList';

export const RepositoryContainer = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const userRes = await axios.get('/api/v1/user/me');
        const login = userRes.data.login;

        const repos = await fetchUserRepositories(login);
        setRepositories(repos);
      } catch (error) {
        console.error('레포지토리 불러오기 실패 :', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);
  console.log(repositories);

  if (loading) return <div>로딩중...</div>;

  return <RepositoryList repositories={repositories} />;
};
