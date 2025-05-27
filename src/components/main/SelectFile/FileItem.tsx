import { FiChevronsLeft } from "react-icons/fi";

interface FileItemProps {
  title: string;
  user: string;
  updated: string;
  showIcon?: boolean;
}

const FileItem = ({
  title,
  user,
  updated,
  showIcon = false,
}: FileItemProps) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center space-x-3">
      <div>
        <h3 className="text-xl font-semibold text-text-default">{title}</h3>
        <div className="mt-0 mb-4 text-sm text-text-description flex space-x-4">
          <span>{user}</span>
          <span>{updated}</span>
        </div>
      </div>
    </div>
    <button
      type="button"
      className="
        bg-primary text-white
        px-16 py-2 rounded-lg
        focus:outline-none
      "
    >
      선택
    </button>
  </div>
);

export default FileItem;