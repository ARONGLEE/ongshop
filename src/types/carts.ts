export interface CartProduct {
  cartNo: number;
  imgUrl: string;
  option: string;
  price: number;
  productNo: number;
  quantity: number;
  title: string;
}

export interface ChangeQuantityProp {
  cartNo: number;
  quantity: number;
}

export interface CartProp {
  no: number;
  option: string;
  quantity: number;
}

export interface PriceProp {
  text: string;
  price: number;
}
