import CartItem from '../components/CartItem';
import { LuPlus, LuEqual } from 'react-icons/lu';
import PriceCard from '../components/PriceCard';
import useCart from '../hooks/useCart';
import NotFound from './NotFound';

const SHIPPING = 3000;

export default function Carts() {
  const {
    getCartItem: { isLoading, data: products, isError },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <NotFound />;

  const hasProducts = products && products.length > 0;

  const productTotalPrice: number = hasProducts
    ? products.reduce((prev, current) => prev + current.price * current.quantity, 0)
    : 0;

  return (
    <section className="p-4 md:p-8 flex flex-col">
      <p className="text-lg text-start px-8 font-semibold font-nanumSquareNeoR">장바구니</p>
      {!hasProducts && <p className="font-nanumSquareNeoR">장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 py-4 px-8">
            {products &&
              products.map((product) => <CartItem key={product.cartNo} product={product} />)}
          </ul>
          <div className="hidden md:flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16 text-lg">
            <PriceCard text="상품 총액" price={productTotalPrice} />
            <LuPlus className="shrink-0" />
            <PriceCard text="배송비" price={SHIPPING} />
            <LuEqual className="shrink-0" />
            <PriceCard text="총액" price={productTotalPrice + SHIPPING} />
          </div>
          <div className="md:hidden mb-6">
            <PriceCard text="총액(배송비 포함)" price={productTotalPrice + SHIPPING} />
          </div>
          <button className="border border-black bg-black text-white font-googleRoboto p-3 my-1.5">
            ORDER
          </button>
        </>
      )}
    </section>
  );
}
