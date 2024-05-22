import { useContext } from 'react';
import { UserRepoContext } from '../contexts/UserRepoContext';
import useCommits from '../hooks/useCommits';
import CommitListItem from './CommitListItem';

export default function CommitList() {
  const { userRepo, setUserRepo } = useContext(UserRepoContext);

  console.log('call', userRepo);
  const { data, error, isLoading } = useCommits(userRepo);

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
      {data?.length &&
        data.map((commit) => (
          <CommitListItem key={commit.sha} commitItem={commit} />
        ))}
    </>
  );
}
