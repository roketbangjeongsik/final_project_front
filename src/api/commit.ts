import axios from 'axios';
import type { Commit } from '../types/commit';

export const fetchCommitsByPr = async (
  owner: string,
  repo: string,
  prNumber: string
): Promise<Commit[]> => {
  const res = await axios.get(`/api/v1/github/repos/${owner}/${repo}/pulls/${prNumber}/commits`);
  return res.data;
};
