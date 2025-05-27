import SearchAndFilter from '../components/main/SelectFile/SearchAndFilter';
import RepositoryList from '../components/main/SelectFile/RepositoryList';
import Pagination from '../components/main/Pagination';

const SelectRepoPage = () => (
  <div className="px-6 sm:px-12 md:px-20 lg:px-36 xl:px-40 pt-8 bg-white min-h-screen">
    <SearchAndFilter />
    <RepositoryList />
    <Pagination />
  </div>
);

export default SelectRepoPage;