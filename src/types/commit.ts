type CommitFile = {
  filename: string;
  changes: number;
  patch: string;
};

export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  files: CommitFile[];
}
