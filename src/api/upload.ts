import instance from './axios';

interface product {
  title: string;
  price: number;
  category: string;
  explanation: string;
  option: string;
}

export async function upload(file: File, product: product) {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('title', product.title);
  formData.append('price', product.price.toString());
  formData.append('category', product.category);
  formData.append('explanation', product.explanation);
  formData.append('option', product.option);

  window.console.log(product.title);
  window.console.log(file);
  window.console.log(product.price);
  // FormData의 key 확인
  for (const key of formData.keys()) {
    window.console.log(key);
  }
  // FormData의 value 확인
  for (const value of formData.values()) {
    window.console.log(value);
  }

  await instance
    .post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => window.console.log(res));
}
