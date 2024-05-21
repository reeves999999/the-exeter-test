import useCommits from '../hooks/useCommits';

interface Props {
  userRepo: string;
}

export default function CommitList({ userRepo }: Props) {
  const { data } = useCommits(userRepo);

  if (!data)
    return (
      <h2 className="text-red-700 font-bold">
        No data available for provided repo name: {userRepo}.
      </h2>
    );

  return (
    <>{data && data.map((c) => <h2 key={c.sha}>{c.commit.author.name}</h2>)}</>
  );
}
