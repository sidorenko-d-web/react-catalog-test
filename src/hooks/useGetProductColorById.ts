import { useQuery } from '@tanstack/react-query';
import { getProductColor } from '../services/api';

export const useGetProductColorById = (productID: number, colorID: number) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['color', productID, colorID],
    queryFn: () => getProductColor(productID, colorID),
    retry: false,
  });

  return { data, isPending, error };
};
