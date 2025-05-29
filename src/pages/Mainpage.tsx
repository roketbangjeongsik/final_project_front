import Header from '../components/main/Header';
import HeroSection from '../components/main/HeroSection';
import CardSection from '../components/main/CardSection';

const MainPage = () => {
  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-36 xl:px-40 pt-24 bg-white">
      <Header />
      <HeroSection />
      <CardSection />
    </div>
  );
};

export default MainPage;
