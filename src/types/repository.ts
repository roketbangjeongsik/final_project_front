export type Repository = {
  id: number;
  name: string;
  language: string;
  visibility: 'public' | 'private';
  updated_at: string;
};
