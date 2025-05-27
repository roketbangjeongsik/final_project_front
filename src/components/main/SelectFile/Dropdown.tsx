import { FiChevronDown } from 'react-icons/fi';

interface DropdownProps {
  label: string;
  showIcon?: boolean;
}

const Dropdown = ({
  label,
  showIcon = true,
}: DropdownProps) => (
  <button
    type="button"
    className="flex items-center gap-4 px-4 py-2 rounded-lg bg-bg-surface border border-border text-text-description focus:outline-none"
  >
    <span>{label}</span>
    {showIcon && <FiChevronDown className="w-4 h-4 text-text-description" />}
  </button>
);

export default Dropdown;