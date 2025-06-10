import { PullRequestContainer } from '../components/pr/PullRequestContainer';

export const PullRequestPage = () => {
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full px-[20%] py-20">
        <PullRequestContainer />
      </div>
    </div>
  );
};
