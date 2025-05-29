import { RepositoryList } from '../components/repo/RepositoryList';
import { dummyData } from '../mocks/repositories';

export const RepositoryPage = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full px-[20%] py-20">
        <RepositoryList repositories={dummyData} />
      </div>
    </div>
  );
};
