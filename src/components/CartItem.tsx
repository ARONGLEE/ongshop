import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
// import { cartPlusMinus } from '../api/carts';
import useCart from '../hooks/useCart';

interface CartProduct {
  cartNo: number;
  imgUrl: string;
  option: string;
  price: number;
  productNo: number;
  quantity: number;
  title: string;
}
interface ChangeQuantityProp {
  cartNo: number;
  quantity: number;
}

const ICON_CLASS = 'transition-all cursor-grabbing hover:scale-105 mx-1';

export default function CartItem({
  product: { cartNo, imgUrl, option, price, title, quantity },
}: {
  product: CartProduct;
}) {
  const { removeCartItem, cartChangeQuantity } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    // cartPlusMinus(product.cartNo, product.quantity - 1);
    const minusQuantity = quantity - 1;
    const changeQuantity: ChangeQuantityProp = { cartNo, quantity: minusQuantity };
    cartChangeQuantity.mutate(changeQuantity);
  };
  const handlePlus = () => {
    // cartPlusMinus(cartNo, quantity + 1);
    const plusQuantity = quantity + 1;
    const changeQuantity: ChangeQuantityProp = { cartNo, quantity: plusQuantity };
    cartChangeQuantity.mutate(changeQuantity);
  };
  const handleDelete = () => {
    // cartRemove(product.cartNo);
    removeCartItem.mutate(cartNo);
  };

  return (
    <>
      <li className="flex justify-between my-2 items-center">
        <img src={imgUrl} alt={title} className="w-24 md:w-48 max-h-32" />
        <div className="flex flex-1 justify-between ml-4">
          <div className="basis-3/5">
            <p className="text-base font-nanumSquareNeoL">{title}</p>
            <p className="text-base font-semibold font-googleRoboto">{option}</p>
            <p className="text-sm font-semibold font-nanumSquareNeoR">₩{price}</p>
          </div>
          <div className="text-lg flex items-center">
            <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
            <span className="text-base font-nanumSquareNeoR">{quantity}</span>
            <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
            <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
          </div>
        </div>
      </li>
    </>
  );
}
