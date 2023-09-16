import instance from './axios';

export async function signup(id: string, nickname: string, password: string) {
  try {
    await instance.post('/members', {
      id: id,
      password: password,
      nickname: nickname,
    });
  } catch (error) {
    console.error('error:', error);
  }
}
