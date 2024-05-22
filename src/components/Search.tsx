import { useContext, useRef, useState } from 'react';
import { UserRepoContext } from '../contexts/UserRepoContext';

const Search = () => {
  const { userRepo, setUserRepo } = useContext(UserRepoContext);

  const [search, setSearch] = useState('');

  const handleClick = () => {
    setUserRepo(search);
  };

  return (
    <div className="flex justify-end mx-20 my-4">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-2 left-2 text-exeter-yellow-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="w-80 border rounded-md py-2 pl-10 pr-4 mr-2 border-gray-700 focus:ring"
        placeholder="e.g. reeves999999/the-exeter-test"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        className="bg-exeter-yellow-900 py-2 px-4 rounded-md hover:opacity-70  transition cursor:pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={!search}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
