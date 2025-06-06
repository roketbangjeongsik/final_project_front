import axios from 'axios';
import type { Repository } from '../types/repository';

export const fetchUserRepositories = async (username: string): Promise<Repository[]> => {
  const response = await axios.get(`/api/v1/github/users/${username}/repos`);
  return response.data;
};
