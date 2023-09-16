export interface Product {
  no: number;
  imgUrl: string;
  title: string;
  category: string;
  explanation: string;
  option: string[];
  price: number;
}

export interface ProductCardProp {
  product: Product;
}

export interface UploadProduct {
  title: string;
  price: string;
  category: string;
  explanation: string;
  option: string;
}
