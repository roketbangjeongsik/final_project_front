import axios from 'axios';
import type { PullRequest } from '../types/pr';

export const fetchPullRequests = async (owner: string, repo: string): Promise<PullRequest[]> => {
  const response = await axios.get(`/api/v1/user/prs/${owner}/${repo}`);
  return response.data;
};
