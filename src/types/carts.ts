export type CartProduct = {
  cartNo: number;
  imgUrl: string;
  option: string;
  price: number;
  productNo: number;
  quantity: number;
  title: string;
};

export type ChangeQuantityProp = {
  cartNo: number;
  quantity: number;
};

export type CartProp = {
  no: number;
  option: string;
  quantity: number;
};

export type PriceProp = {
  text: string;
  price: number;
};
