import axios from 'axios';

export const fetchKakaoSearch = async (query: string) => {
  const res = await axios.get('/api/v1/research/search', {
    params: { query },
  });

  return res.data.slice(0, 5);
};
