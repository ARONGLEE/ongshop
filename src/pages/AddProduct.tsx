import React, { FormEvent, useRef, useState } from 'react';
import { upload } from '../api/upload';
import swal from 'sweetalert';
import { UploadProduct } from '../types/products';

export default function AddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<UploadProduct>({
    title: '',
    price: '',
    category: '',
    explanation: '',
    option: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      if (files && files.length > 0) {
        setFile(files[0]);
      }
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (!file) {
      return;
    }
    upload(file, product).then(() => {
      swal('⭐️ 제품이 등록되었습니다.');
      setIsLoading(false);
      setFile(null);
      setProduct({ title: '', price: '', category: '', explanation: '', option: '' });
      if (fileInput.current) {
        fileInput.current.value = '';
      }
    });
  };

  return (
    <div className="flex flex-col my-5 w-7/12 mx-auto">
      <p className="text-lg text-start font-nanumSquareNeoR font-semibold pb-4">상품 등록</p>

      {file && (
        <img src={URL.createObjectURL(file)} className="max-h-[35rem] mt-5" alt="local file" />
      )}
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          name="file"
          ref={fileInput}
          required
          className="border border-gray-300 p-3 mt-5 mb-1.5"
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 my-1.5"
          placeholder="제품명"
        />
        <input
          type="number"
          name="price"
          value={product.price ?? 0}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 my-1.5"
          placeholder="가격"
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 my-1.5"
          placeholder="카테고리"
        />
        <input
          type="text"
          name="explanation"
          value={product.explanation ?? ''}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 my-1.5"
          placeholder="제품 설명"
        />
        <input
          type="text"
          name="option"
          value={product.option ?? ''}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 my-1.5"
          placeholder="옵션들(콤마(,)로 구분)"
        />
        <button
          disabled={isLoading}
          className="border border-black bg-black text-white font-googleRoboto p-3 my-1.5"
        >
          {isLoading ? 'Uploading...' : 'ADD PRODUCT'}
        </button>
      </form>
    </div>
  );
}
