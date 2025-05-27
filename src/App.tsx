import MainPage from './pages/Mainpage';
import SelectRepoPage from './pages/SelectRepoPage';
import SelectFilePage from './pages/SelectFilePage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 화면 */}
        <Route path="/" element={<MainPage />} />

        {/* http://localhost:5174/select 에 들어오면 SelectRepoPage 렌더링 */}
        <Route path="/select" element={<SelectRepoPage />} />

        {/* http://localhost:5174/select-file 에 들어오면 SelectFilePage 렌더링 */}
        <Route path="/select-file" element={<SelectFilePage />} />

        {/* 그 외 모든 경로는 홈으로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;