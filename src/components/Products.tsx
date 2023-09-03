import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getProductListInfinitely } from '../api/products';
import NotFound from '../pages/NotFound';
import ProductCard from './ProductCard';

export default function Products() {
  const { ref, inView } = useInView();

  window.console.log('여기찍히나요');

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

  if (isError) {
    return <NotFound />;
  }

  useEffect(() => {
    window.console.log(inView);
    if (inView) fetchNextPage();
  }, [inView]);

  window.console.log(data);
  window.console.log(data?.pages[0].productList);
  window.console.log(hasNextPage);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {data?.pages.map((page) =>
          page.productList.map((product) => <ProductCard key={product.no} product={product} />),
        )}
      </ul>
      {isFetchingNextPage ? <div>loading...</div> : <div ref={ref}></div>}
    </>
  );
}
