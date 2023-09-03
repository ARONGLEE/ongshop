import instance from './axios';

export interface Product {
  no: number;
  imgUrl: string;
  title: string;
  category: string;
  explanation: string;
  option: string[];
  price: string;
}

export async function getProductListInfinitely(lastProductNo: number, size: number) {
  const res = await instance.get(`/products?lastProductNo=${lastProductNo}&size=${size}`);
  const productList: Product[] = res.data.result;
  window.console.log('확인 필요!');
  return {
    productList,
    nextLastProductNo: productList[productList.length - 1]?.no,
    isLast: productList.length < size,
  };
}
