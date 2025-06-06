export type Repository = {
  full_name: string;
  language: string;
  name: string;
  owner: {
    login: string;
  };
  privateRepo: boolean;
  updated_at: string;
  visibility: 'public' | 'private';
};
