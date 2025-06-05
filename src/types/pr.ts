export interface PRUser {
  login: string;
  html_url: string;
  avatar_url: string;
}

export interface PRItem {
  number: number;
  state: string;
  title: string;
  user: PRUser;
  html_url: string;
  created_at: string;
  updated_at: string;
}
