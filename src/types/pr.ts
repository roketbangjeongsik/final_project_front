export interface PullRequest {
  number: number;
  state: string;
  title: string;
  user: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
  html_url: string;
  created_at: string;
  updated_at: string;
}
