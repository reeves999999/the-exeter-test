import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import commits from '../data/commits.json';
import CommitItem from '../entities/CommitItem';
import APIClient from '../services/api-client';

const useCommits = (userRepo: string) => {
  const apiClient = new APIClient<CommitItem>(userRepo);
  return useQuery({
    queryKey: ['commits'],
    queryFn: () => apiClient.getAll(),
    staleTime: ms('5m'),
    retry: 1,
    //initialData: commits,
  });
};

export default useCommits;
