import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { cartPlusMinus, cartRemove, carts, getCart } from '../api/carts';
import { CartProp, ChangeQuantityProp } from '../types/carts';

export default function useCart() {
  const memberNoValue = localStorage.getItem('memberNo')!;
  const memberNo = parseInt(memberNoValue, 10);
  const queryClient = useQueryClient();

  const getCartItem = useQuery(['carts', memberNo || ''], () => getCart(memberNo), {
    enabled: !!memberNo,
  });

  const addCartItem = useMutation(
    (cartProp: CartProp) => {
      const { no, option, quantity } = cartProp;
      return carts(no, memberNo, option, quantity);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', memberNo]);
      },
    },
  );

  const removeCartItem = useMutation(
    (cartNo: number) => {
      return cartRemove(cartNo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', memberNo]);
      },
    },
  );

  const cartChangeQuantity = useMutation(
    (changeQuantityProp: ChangeQuantityProp) => {
      const { cartNo, quantity } = changeQuantityProp;
      return cartPlusMinus(cartNo, quantity);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['carts', memberNo]);
      },
    },
  );

  return { getCartItem, addCartItem, removeCartItem, cartChangeQuantity };
}
