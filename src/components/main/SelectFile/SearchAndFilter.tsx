import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

interface SearchAndFilterProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const SearchAndFilter = ({
  searchValue = '',
  onSearchChange,
}: SearchAndFilterProps) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <SearchBar
      value={searchValue}
      onChange={(e) => onSearchChange?.(e.target.value)}
    />
    <div className="flex items-center gap-2">
      <Dropdown label="Language" />
      <Dropdown label="Sort" />
    </div>
  </div>
);

export default SearchAndFilter;