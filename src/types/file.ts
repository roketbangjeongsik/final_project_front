export type FileItem = {
  id: string;
  name: string;
  author: string;
  updated_at: string;
  type: 'PR' | 'Commit';
};

export type FileList = FileItem[];
