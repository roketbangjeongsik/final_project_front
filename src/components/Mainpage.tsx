import Header from './Header';
import HeroSection from './HeroSection';
import CardSection from './CardSection';

export default function MainPage() {
  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-36 xl:px-40 pt-24 bg-white">
      <Header />
      <HeroSection />
      <CardSection />
    </div>
  );
}
