import { useQuery } from '@tanstack/react-query';
import CommitItem from '../entities/CommitItem';
import APIClient from '../services/api-client';

const useCommits = (userRepo:string ) =>{
    
const apiClient = new APIClient<CommitItem>(userRepo);

    return useQuery({
    queryKey: ['commits'],
    queryFn: () => apiClient.getAll(userRepo),
  });
}
  

export default useCommits;
