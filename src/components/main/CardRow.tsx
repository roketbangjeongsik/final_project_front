import type { ReactNode } from 'react';

interface CardRowProps {
  textCard: ReactNode;
  imageCard: ReactNode;
  reverse?: boolean;
}

export default function CardRow({ textCard, imageCard, reverse = false }: CardRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-4 items-stretch ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {' '}
      {/* 텍스트 카드 (1/3) */}
      <div className="w-full md:basis-1/3 shrink-0">{textCard}</div>
      {/* 이미지 카드 (2/3) */}
      <div className="w-full md:basis-2/3">{imageCard}</div>
    </div>
  );
}
