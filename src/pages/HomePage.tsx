import { useState } from 'react';
import CommitList from '../components/CommitList';
import Search from '../components/Search';

const HomePage = () => {
  const [userRepo, setUserRepo] = useState('reeves999999/the-exeter-test');
  return (
    <>
      <Search />
      <CommitList userRepo={userRepo} />
    </>
  );
};

export default HomePage;
