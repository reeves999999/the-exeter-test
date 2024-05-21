const Search = () => {
  return (
    <div className="flex justify-end">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute top-2 left-2 text-exeter-yellow-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="border rounded-md py-2 pl-10 pr-4 mr-2 border-black"
      />
      <button
        type="submit"
        className="bg-exeter-yellow-900 py-2 px-4 rounded-md"
      >
        Search
      </button>{' '}
    </div>
  );
};

export default Search;
