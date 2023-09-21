export type Product = {
  no: number;
  imgUrl: string;
  title: string;
  category: string;
  explanation: string;
  option: string[];
  price: number;
};

export type ProductCardProp = {
  product: Product;
};

export type UploadProduct = {
  title: string;
  price: string;
  category: string;
  explanation: string;
  option: string;
};
