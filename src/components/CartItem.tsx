import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useCart from '../hooks/useCart';
import { CartProduct, ChangeQuantityProp } from '../types/carts';

const ICON_CLASS = 'transition-all cursor-grabbing hover:scale-105 mx-1';

export default function CartItem({
  product: { cartNo, imgUrl, option, price, title, quantity },
}: {
  product: CartProduct;
}) {
  const { removeCartItem, cartChangeQuantity } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    const minusQuantity = quantity - 1;
    const changeQuantity: ChangeQuantityProp = { cartNo, quantity: minusQuantity };
    cartChangeQuantity.mutate(changeQuantity);
  };
  const handlePlus = () => {
    const plusQuantity = quantity + 1;
    const changeQuantity: ChangeQuantityProp = { cartNo, quantity: plusQuantity };
    cartChangeQuantity.mutate(changeQuantity);
  };
  const handleDelete = () => {
    removeCartItem.mutate(cartNo);
  };

  return (
    <>
      <li className="flex justify-between my-4 md:my-2 items-center">
        <img src={imgUrl} alt={title} className="w-24 md:w-48 max-h-32" />
        <div className="flex flex-col md:flex-row flex-1 justify-between ml-4 gap-2">
          <div className="basis-3/5 flex flex-col">
            <div className="flex flex-row gap-1 md:flex-col">
              <p className="text-sm md:text-base font-nanumSquareNeoL">{title}</p>
              <p className="text-sm md:text-base font-semibold font-googleRoboto">{option}</p>
            </div>
            <p className="text-xs md:text-sm font-semibold font-nanumSquareNeoR">₩{price}</p>
          </div>
          <div className="text-base md:text-lg flex items-center">
            <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
            <span className="text-sm md:text-base font-nanumSquareNeoR">{quantity}</span>
            <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
            <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
          </div>
        </div>
      </li>
    </>
  );
}
