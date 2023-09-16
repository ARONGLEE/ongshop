import { Product } from '../types/products';
import instance from './axios';

export async function getProductListInfinitely(lastProductNo: number, size: number) {
  const res = await instance.get(`/products?lastProductNo=${lastProductNo}&size=${size}`);
  const productList: Product[] = res.data.result;

  return {
    productList,
    nextLastProductNo: productList[productList.length - 1]?.no,
    isLast: productList.length < size,
  };
}
