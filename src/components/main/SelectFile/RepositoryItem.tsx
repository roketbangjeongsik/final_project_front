import { FiChevronsLeft } from 'react-icons/fi';

interface RepositoryItemProps {
  name: string;
  language: string;
  updatedAt: string;
  isPublic?: boolean;
  showIcon?: boolean;
}

const RepositoryItem = ({
  name,
  language,
  updatedAt,
  isPublic = true,
  showIcon = false,
}: RepositoryItemProps) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center space-x-3">
      {showIcon && (
        <FiChevronsLeft className="w-4 h-4 text-text-description" />
      )}
      <div>
        <h3 className="text-xl font-semibold text-text-default">{name}</h3>
        <div className="mt-0 mb-4 text-sm text-text-description flex space-x-2">
          <span>{language}</span>
          <span>·</span>
          <span>{updatedAt}</span>
          {isPublic && (
            <span className="px-2 py-0.5 border border-border rounded-full text-xs ml-2">
              Public
            </span>
          )}
        </div>
      </div>
    </div>
    <button
      type="button"
      className="bg-primary text-white px-16 py-2 rounded-lg focus:outline-none"
    >
      선택
    </button>
  </div>
);

export default RepositoryItem;