import CommitItem from '../entities/CommitItem';

interface Props {
  commitItem: CommitItem;
}

const CommitListItem = ({ commitItem }: Props) => {
  const {
    sha,
    commit: { message },
  } = commitItem;
  return (
    <div className="flex items-center bg-white">
      <div>{sha}</div>
      <div>{message}</div>
    </div>
  );
};

export default CommitListItem;
