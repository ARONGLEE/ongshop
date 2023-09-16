import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import useProducts from '../hooks/useProducts';
import NotFound from '../pages/NotFound';
import ProductCard from './ProductCard';

export default function Products() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, isError } = useProducts();

  if (isError) {
    return <NotFound />;
  }

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

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
