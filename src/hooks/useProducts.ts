import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () =>
      axios
        .get('https://fakestoreapi.com/products')
        .then((res) => res.data),
  })
}
