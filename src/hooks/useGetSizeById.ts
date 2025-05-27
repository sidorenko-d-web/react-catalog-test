import { useQuery } from '@tanstack/react-query';
import { getSize } from '../services/api';

export const useGetSizeById = (id: number) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['size', id],
    queryFn: () => getSize(id),
    retry: false,
  });

  return { data, isPending, error };
};
