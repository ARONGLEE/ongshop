import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    getCartItem: { data: products },
  } = useCart();

  return (
    <div className="flex flex-row items-center">
      <p>Carts</p>
      {products && (
        <p className="w-4 h-4 ml-1 text-center text-xs bg-black text-white font-bold rounded-full">
          {products.length}
        </p>
      )}
    </div>
  );
}
