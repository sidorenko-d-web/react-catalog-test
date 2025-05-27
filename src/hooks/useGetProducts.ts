import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services/api';

export const useGetProducts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['items'],
    queryFn: getProducts,
    retry: false,
  });

  return { data, isPending, error };
};
