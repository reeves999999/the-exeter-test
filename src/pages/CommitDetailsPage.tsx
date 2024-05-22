import { useParams } from 'react-router-dom';
import useCommit from '../hooks/useCommit';

const CommitDetailsPage = () => {
  const { user, repo, sha } = useParams();

  const { data, error, isLoading } = useCommit(user!, repo!, sha!);

  return (
    <main className="bg-gray-100 px-20 py-8">
      <h1>
        Details for: <span className="font-bold">{sha}</span>
      </h1>
      <section className="grid grid-cols-[repeat(2,minmax(100px,auto))] my-4 bg-white border border-gray-300 rounded-md overflow-hidden">
        <div className="col-span-2">
          <img src={data?.commit?.author?.avatar_url} />
        </div>
        <div className="bg-gray-200 p-2">Author:</div>
        <div className="p-2">{data?.commit.author?.name}</div>

        <div className="bg-gray-200 p-2">Email:</div>
        <div className="p-2">{data?.commit.author?.email}</div>

        <div className="bg-gray-200 p-2">Message:</div>
        <div className="p-2">{data?.commit.message}</div>

        <div className="bg-gray-200 p-2">Date:</div>
        <div className="p-2">{data?.commit.author?.date}</div>
      </section>
    </main>
  );
};

export default CommitDetailsPage;
