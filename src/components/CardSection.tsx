import CardRow from './CardRow';
import TextCard from './TextCard';
import ImageCard from './ImageCard';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import curveLine from '../assets/Rectangle.svg';

export default function CardSection() {
  return (
    <section className="relative px-20 py-20 bg-white space-y-16 overflow-hidden">
      <h1 className="text-center text-3xl font-bold mb-[150px]">About RocketInsight</h1>

      <img
        src={curveLine}
        alt=""
        className="absolute top-[150px] inset-0 w-full h-auto object-cover opacity-40 pointer-events-none"
      />

      <div className="space-y-8 relative z-10">
        <CardRow
          textCard={<TextCard title="Lorem ipsum" description="설명 텍스트 자리입니다." />}
          imageCard={<ImageCard src={image1} alt="코드 설명" />}
        />

        <CardRow
          reverse
          textCard={<TextCard title="Lorem ipsum" description="설명 텍스트 자리입니다." />}
          imageCard={<ImageCard src={image2} alt="리팩토링 비교" />}
        />

        <CardRow
          textCard={<TextCard title="Lorem ipsum" description="설명 텍스트 자리입니다." />}
          imageCard={<ImageCard src={image3} alt="키워드 추출 결과" />}
        />
      </div>
    </section>
  );
}
