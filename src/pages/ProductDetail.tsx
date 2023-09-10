import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { carts } from '../api/carts';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const { user } = useAuthContext();
  const {
    state: {
      product: { no, imgUrl, explanation, option, price, title },
    },
  } = useLocation();

  const [selected, setSelected] = useState(option && option[0]);
  const [success, setSuccess] = useState('');
  const quantity: number = 1;
  const memberNoValue = localStorage.getItem('memberNo')!;
  const memberNo = parseInt(memberNoValue, 10);
  window.console.log(memberNo);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const handleClick = () => {
    // (no키값을 productNo로 변경해서 보내기)
    // const product = { no, memberNo: 1, option: selected, quantity: 1 };
    carts(no, memberNo, selected, quantity);
    setSuccess('장바구니에 추가되었습니다.');
  };

  return (
    <section className="flex flex-col md:flex-row p-4">
      <img className="w-full max-w-[60%] px-4 basis-1/2" src={imgUrl} alt={title} />
      <div className="w-full max-w-[40%] basis-1/2 flex flex-col p-4">
        <h2 className="text-3xl font-bold py-2 font-nanumSquareNeoR">{title}</h2>
        <p className="py-4 text-lg font-nanumSquareNeoL">{explanation}</p>
        <div className="flex items-center pb-4">
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
        {success && <p className="my-2">⭐️{success}</p>}
        <button
          className="border border-black bg-black text-white font-googleRoboto p-3 my-1.5"
          onClick={handleClick}
          disabled={user === null || undefined || false}
        >
          {`ADD \u00A0\u00A0\u00A0\u00A0 ₩${price}`}
        </button>
      </div>
    </section>
  );
}
