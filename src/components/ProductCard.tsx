import { useNavigate } from 'react-router-dom';
import { ProductCardProp } from '../types/products';

export default function ProductCard({ product }: ProductCardProp) {
  const navigate = useNavigate();
  const { no, imgUrl, title, price, category } = product;
  return (
    <li
      onClick={() => {
        navigate(`/products/${no}`, { state: { product } });
      }}
      className="cursor-grabbing transition-all hover:scale-105"
    >
      <img className="w-full h-72" src={imgUrl} alt={title} />
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <h3 className="text-base truncate font-nanumSquareNeoR">{title}</h3>
        <p className="text-base font-nanumSquareNeoR">{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600 font-googleRoboto">{category}</p>
    </li>
  );
}
