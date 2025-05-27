import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../services/api';

export const useGetProductById = (id: number) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['item'],
    queryFn: () => getProduct(id),
    retry: false,
  });

  return { data, isPending, error };
};
