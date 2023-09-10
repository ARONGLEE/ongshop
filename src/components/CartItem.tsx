import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { cartPlusMinus, cartRemove } from '../api/carts';

interface CartProduct {
  cartNo: number;
  imgUrl: string;
  option: string;
  price: number;
  productNo: number;
  quantity: number;
  title: string;
}
const ICON_CLASS = 'transition-all cursor-grabbing hover:scale-105 mx-1';
export default function CartItem({ product }: { product: CartProduct }) {
  const handleMinus = () => {
    if (product.quantity < 2) return;
    cartPlusMinus(product.cartNo, product.quantity - 1);
  };
  const handlePlus = () => {
    cartPlusMinus(product.cartNo, product.quantity + 1);
  };
  const handleDelete = () => {
    cartRemove(product.cartNo);
  };

  return (
    <>
      <li className="flex justify-between my-2 items-center">
        <img src={product.imgUrl} alt={product.title} className="w-24 md:w-48 max-h-32" />
        <div className="flex flex-1 justify-between ml-4">
          <div className="basis-3/5">
            <p className="text-lg">{product.title}</p>
            <p className="text-lg font-semibold font-googleRoboto">{product.option}</p>
            <p>₩{product.price}</p>
          </div>
          <div className="text-lg flex items-center">
            <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
            <span>{product.quantity}</span>
            <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
            <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
          </div>
        </div>
      </li>
    </>
  );
}
