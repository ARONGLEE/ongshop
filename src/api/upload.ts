import { UploadProduct } from '../types/products';
import instance from './axios';

export async function upload(file: File, product: UploadProduct) {
  try {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('title', product.title);
    formData.append('price', product.price);
    formData.append('category', product.category);
    formData.append('explanation', product.explanation);
    formData.append('option', product.option);

    await instance.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('error:', error);
  }
}
