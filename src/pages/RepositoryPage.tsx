import { RepositoryContainer } from '../components/repo/RepositoryContainer';

export const RepositoryPage = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full px-[20%] py-20">
        <RepositoryContainer />
      </div>
    </div>
  );
};
