import type { ChangeEvent } from 'react';

interface SearchBarProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Find a repository',
}: SearchBarProps) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full max-w-2xl border border-border rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
  />
);

export default SearchBar;