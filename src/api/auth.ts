import instance from './axios';

// export async function login(isIdValue: string, isPwValue: string) {
//   const res = await instance.post('/signin', {
//     id: isIdValue,
//     password: isPwValue,
//   });
//   return res.data.result;
// }

export async function signup(id: string, nickname: string, password: string) {
  await instance.post('/members', {
    id: id,
    password: password,
    nickname: nickname,
  });
}
