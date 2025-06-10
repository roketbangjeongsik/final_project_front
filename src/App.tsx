import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import { RepositoryPage } from './pages/RepositoryPage';
import { PullRequestPage } from './pages/PullRequestPage';
import TestGitHubApis from './api/test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/repo" element={<RepositoryPage />} />
      <Route path="/repos/:owner/:repo/prs" element={<PullRequestPage />} />
      <Route path="/TestGitHubApis" element={<TestGitHubApis />} />
    </Routes>
  );
}

export default App;
