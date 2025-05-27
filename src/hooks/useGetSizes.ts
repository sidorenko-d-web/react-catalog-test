import { useQuery } from '@tanstack/react-query';
import { getSizes } from '../services/api';

export const useGetSizes = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['sizes'],
    queryFn: getSizes,
    retry: false,
  });

  return { data, isPending, error };
};
