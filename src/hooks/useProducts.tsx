import { useInfiniteQuery } from '@tanstack/react-query';
import { getProductListInfinitely } from '../api/products';

export default function useProducts() {
  const fetchProducts = ({ pageParam = 0 }) => {
    return getProductListInfinitely(pageParam, 12);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery(
    ['products'],
    fetchProducts,
    {
      getNextPageParam: (lastPage) => lastPage.nextLastProductNo,
    },
  );

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError };
}
