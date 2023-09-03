import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  no: number;
  imgUrl: string;
  title: string;
  category: string;
  explanation: string;
  option: string[];
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}