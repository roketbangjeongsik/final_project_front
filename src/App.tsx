import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import { RepositoryPage } from './pages/RepositoryPage';
import { PullRequestPage } from './pages/PullRequestPage';
import { CommitPage } from './pages/CommitPage';
import { ReviewResultPage } from './pages/ReviewResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/repo" element={<RepositoryPage />} />
      <Route path="/repos/:owner/:repo/prs" element={<PullRequestPage />} />
      <Route path="/repos/:owner/:repo/pulls/:prNumber/commits" element={<CommitPage />} />
      <Route path="/review-result" element={<ReviewResultPage />} />
    </Routes>
  );
}

export default App;
