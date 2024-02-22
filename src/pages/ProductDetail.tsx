import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const { user } = useAuthContext();
  const { addCartItem } = useCart();
  const {
    state: {
      product: { no, imgUrl, explanation, option, price, title },
    },
  } = useLocation();

  const [selected, setSelected] = useState(option && option[0]);
  const [success, setSuccess] = useState<string | null>('');
  const quantity: number = 1;
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const handleClick = () => {
    const product = { no, option: selected, quantity };
    addCartItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <section className="flex flex-col md:flex-row p-4 justify-center">
      <img
        className="w-full md:max-w-[60%] max-h-[30rem] px-4 basis-1/2"
        src={imgUrl}
        alt={title}
      />
      <div className="w-full md:max-w-[40%] basis-1/2 flex flex-col p-4">
        <h2 className="text-xl md:text-3xl font-bold py-2 font-nanumSquareNeoR">{title}</h2>
        <p className="py-4 text-sm md:text-lg font-nanumSquareNeoL">{explanation}</p>
        <div className="flex items-center pb-4 text-sm md:text-lg">
          <label htmlFor="select" className="pr-3 font-semibold font-nanumSquareNeoR">
            옵션:
          </label>
          <select
            className="flex-1 outline-none font-googleRoboto"
            id="select"
            onChange={handleSelect}
            value={selected}
          >
            {option && option.map((size: string, idx: number) => <option key={idx}>{size}</option>)}
          </select>
        </div>
        {success && <p className="font-nanumSquareNeoR">⭐️ {success}</p>}
        <button
          className="border border-black bg-black text-white font-googleRoboto p-3 my-1.5"
          onClick={handleClick}
          disabled={user === false || undefined}
        >
          {`ADD \u00A0\u00A0\u00A0\u00A0 ₩${price}`}
        </button>
      </div>
    </section>
  );
}
