interface ImageCardProps {
  src: string;
  alt?: string;
}

const ImageCard = ({ src, alt }: ImageCardProps) => {
  return (
    <div className="bg-white border rounded-xl overflow-hidden w-full h-[400px]">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

export default ImageCard;
