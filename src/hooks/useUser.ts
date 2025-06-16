import { useEffect, useState } from 'react';
import axios from 'axios';
import type { User } from '../types/user';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<User>('/api/v1/user/me', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  // 로그아웃 API 호출
  const logout = async () => {
    try {
      await axios.post('/api/v1/user/logout');
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return { user, loading, logout };
};
