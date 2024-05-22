import { Link, useNavigate } from 'react-router-dom';
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
    <>
      <div className="py-2 px-4 bg-white border-r border-t border-gray-300 hover:bg-gray-100">
        <Link to={`/details/${sha}`} className="cursor-pointer">
          {sha}
        </Link>
      </div>
      <div className="py-2 px-4  bg-white border-t border-gray-300 hover:bg-gray-100">
        {message}
      </div>
    </>
  );
};

export default CommitListItem;
