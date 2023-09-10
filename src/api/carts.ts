import instance from './axios';

// interface Product {
//   productNo: number;
//   memberNo: number;
//   option: string;
//   quantity: string;
// }

interface CartProduct {
  cartNo: number;
  imgUrl: string;
  option: string;
  price: number;
  productNo: number;
  quantity: number;
  title: string;
}

export async function carts(productNo: number, memberNo: number, option: string, quantity: number) {
  const res = await instance.post('/carts', {
    productNo: productNo,
    memberNo: memberNo,
    option: option,
    quantity: quantity,
  });
  window.console.log(res);
}

export async function getCart(memberNo: number) {
  const res = await instance.get(`/carts/${memberNo}`);
  window.console.log(res.data.result);
  const productList: CartProduct[] = res.data.result;
  return productList;
}

export async function cartPlusMinus(cartNo: number, quantity: number) {
  const res = await instance.put('/carts', {
    cartNo: cartNo,
    quantity: quantity,
  });
  window.console.log(res);
}

export async function cartRemove(cartNo: number) {
  const res = await instance.delete(`/carts/${cartNo}`);
  window.console.log(res);
}
