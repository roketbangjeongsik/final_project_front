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

export const fetchCommitDiff = async (
  owner: string,
  repo: string,
  sha: string
): Promise<string> => {
  const { data } = await axios.get(`/api/v1/github/repos/${owner}/${repo}/commits/${sha}`);
  return data.files
    .map((file: { patch: string }) => file.patch)
    .filter(Boolean)
    .join('\n');
};
