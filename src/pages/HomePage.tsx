import { useContext } from 'react';
import CommitList from '../components/CommitList';
import Search from '../components/Search';
import { UserRepoContext } from '../contexts/UserRepoContext';

const HomePage = () => {
  const { userRepo, setUserRepo } = useContext(UserRepoContext);
  return (
    <>
      <Search />
      <main className="bg-gray-100 px-20 py-8">
        {!userRepo && (
          <h2>
            Please enter search criteria in the form{' '}
            <span className="font-bold">[user name]/[repository name] </span>
            and click Search.
          </h2>
        )}
        {userRepo && <CommitList />}
      </main>
    </>
  );
};

export default HomePage;
