import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

const HeroSection = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();

  const handleStart = () => {
    if (loading) return;
    if (user) {
      navigate('/repo');
    } else {
      window.location.href = 'http://localhost:8080/oauth2/authorization/github';
    }
  };

  return (
    <section className="text-center pt-[150px] py-32 my-[100px]">
      <h2 className="text-2xl md:text-4xl font-bold mt-20 mb-10">코드 분석, 로켓처럼 빠르게</h2>
      <p className="text-text-description mb-10">
        개발자의 리뷰 부담을 줄이고, 협업의 품질을 높입니다.
      </p>
      <button
        onClick={handleStart}
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover transition"
      >
        시작하기
      </button>
    </section>
  );
};
export default HeroSection;
