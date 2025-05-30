import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import { RepositoryPage } from './pages/RepositoryPage';
import { FilePage } from './pages/FilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/repo" element={<RepositoryPage />} />
      <Route path="/file" element={<FilePage />} />
    </Routes>
  );
}

export default App;
