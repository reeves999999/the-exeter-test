import { useContext } from 'react';
import { UserRepoContext } from '../contexts/UserRepoContext';
import useCommits from '../hooks/useCommits';
import CommitListItem from './CommitListItem';

export default function CommitList() {
  const { userRepo } = useContext(UserRepoContext);

  const { data } = useCommits(userRepo);

  if (!data) {
    return (
      <h2 className="text-exeter-grey-900">
        No commits available for provided repo name:{' '}
        <span className="font-bold"> {userRepo}</span>.
      </h2>
    );
  }

  return (
    <>
      <p className="font-bold text-lg mb-4">{data.length} commits found.</p>
      <div className="grid grid-cols-2 bg-white rounded-md overflow-hidden border border-gray-300">
        <div className="bg-gray-200 py-2 px-4 font-bold border-r border-gray-300">
          ID
        </div>
        <div className="bg-gray-200 py-2 px-4 font-bold">Message</div>
        {data?.length &&
          data.map((commit) => (
            <CommitListItem key={commit.sha} commitItem={commit} />
          ))}
      </div>
    </>
  );
}
