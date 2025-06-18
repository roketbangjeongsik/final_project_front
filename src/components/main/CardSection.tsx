import CardRow from './CardRow';
import TextCard from './TextCard';
import ImageCard from './ImageCard';
import image1 from '/src/assets/image1.png';
import image2 from '/src/assets/image2.png';
import image3 from '/src/assets/image3.png';
import curveLine from '/src/assets/Rectangle.svg';

const CardSection = () => {
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
          textCard={
            <TextCard
              title="코드 설명"
              description="AI가 코드의 주요 기능과 동작 흐름을 요약합니다."
            />
          }
          imageCard={<ImageCard src={image1} alt="코드 설명" />}
        />

        <CardRow
          reverse
          textCard={
            <TextCard
              title="리팩토링"
              description="코드를 개선할 수 있는 방향과 예시를 제시합니다."
            />
          }
          imageCard={<ImageCard src={image2} alt="리팩토링 비교" />}
        />

        <CardRow
          textCard={
            <TextCard
              title="검색"
              description="코드와 연관된 개념이나 키워드로 외부 자료를 검색할 수 있습니다."
            />
          }
          imageCard={<ImageCard src={image3} alt="키워드 추출 결과" />}
        />
      </div>
    </section>
  );
};

export default CardSection;
