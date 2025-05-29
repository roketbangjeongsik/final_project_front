interface TextCardProps {
  title: string;
  description: string;
}
const TextCard = ({ title, description }: TextCardProps) => {
  return (
    <div className="bg-white border rounded-xl p-8 h-full">
      <h3 className="font-bold text-xl mb-4 text-text-default">{title}</h3>
      <p className="text-sm text-text-description">{description}</p>
    </div>
  );
};

export default TextCard;
