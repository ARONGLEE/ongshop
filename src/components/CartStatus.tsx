// import { useQuery } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/carts';

export default function CartStatus() {
  const memberNoValue = localStorage.getItem('memberNo')!;
  const memberNo = parseInt(memberNoValue, 10);
  getCart(memberNo);

  const { data: products } = useQuery(['carts'], () => getCart(memberNo));
  // window.console.log(products.length);

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
