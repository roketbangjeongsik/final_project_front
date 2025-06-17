import { FiSearch } from 'react-icons/fi';

type Props = {
  onClick: () => void;
};

export const ReviewResultSearchButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition"
    >
      <FiSearch />
    </button>
  );
};
