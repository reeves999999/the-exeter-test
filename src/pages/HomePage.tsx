import { useState } from 'react';
import CommitList from '../components/CommitList';
import Search from '../components/Search';

const HomePage = () => {
  const [userRepo, setUserRepo] = useState('reeves999999/the-exeter-test');
  return (
    <main className="mx-20 my-8">
      <Search />
      <CommitList userRepo={userRepo} />
    </main>
  );
};

export default HomePage;
