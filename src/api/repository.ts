import axios from 'axios';
import type { Repository } from '../types/repository';

export const fetchUserRepositories = async (): Promise<Repository[]> => {
  const response = await axios.get(`/api/v1/github/user/repos`);
  return response.data;
};
