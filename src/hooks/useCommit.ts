import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import CommitItem from '../entities/CommitItem';
import APIClient from '../services/api-client';

const useCommit = (user: string, repo: string, sha: string) => {
  const apiClient = new APIClient<CommitItem>(`${user}/${repo}`);
  return useQuery({
    queryKey: ['commits', sha],
    queryFn: () => apiClient.get(`commits/${sha}`),
    staleTime: ms('24h'),
    retry: 1,
  });
};

export default useCommit;
