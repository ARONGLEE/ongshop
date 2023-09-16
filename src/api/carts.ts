import { CartProduct } from '../types/carts';
import instance from './axios';

export async function carts(productNo: number, memberNo: number, option: string, quantity: number) {
  try {
    return await instance.post('/carts', {
      productNo: productNo,
      memberNo: memberNo,
      option: option,
      quantity: quantity,
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function getCart(memberNo: number) {
  try {
    const res = await instance.get(`/carts/${memberNo}`);
    const productList: CartProduct[] = res.data.result;
    return productList;
  } catch (error) {
    console.error('error:', error);
  }
}

export async function cartPlusMinus(cartNo: number, quantity: number) {
  try {
    return await instance.put('/carts', {
      cartNo: cartNo,
      quantity: quantity,
    });
  } catch (error) {
    console.error('error:', error);
  }
}

export async function cartRemove(cartNo: number) {
  try {
    return await instance.delete(`/carts/${cartNo}`);
  } catch (error) {
    console.error('error:', error);
  }
}
