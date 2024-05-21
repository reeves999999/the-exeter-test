import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import CommitItem from '../entities/CommitItem';
import APIClient from '../services/api-client';

const apiClient = new APIClient<CommitItem>('/commits');

const useCommit = (sha: string) =>
  useQuery({
    queryKey: ['commits',sha],
    queryFn: () => apiClient.get(sha),
    staleTime: ms('24h'),
  });

export default useCommit;
