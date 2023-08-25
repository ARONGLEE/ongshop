import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

export default function Signup() {
  const [isIdValue, setIsIdValue] = useState<string>('');
  const [isNicknameValue, setIsNicknameValue] = useState<string>('');
  const [isPwValue, setIsPwValue] = useState<string>('');
  // const [isPwCheckValue, setIsPwCheckValue] = useState<string>('');
  const navigate = useNavigate();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIdValue(e.target.value);
  }, []);
  const onChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNicknameValue(e.target.value);
  }, []);
  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwValue(e.target.value);
  }, []);
  // const onChangePwCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsPwCheckValue(e.target.value);
  // }, []);

  const handleSignup = async (isIdValue: string, isNicknameValue: string, isPwValue: string) => {
    await instance
      .post('/members', {
        id: isIdValue,
        password: isPwValue,
        nickname: isNicknameValue,
      })
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        window.console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col my-5 w-3/6 mx-auto">
        <h1 className="font-medium my-4">회원가입</h1>
        <label className="block">
          <span className="block my-1.5 text-sm font-medium text-slate-700">아이디</span>
          <input
            type="text"
            required
            onChange={onChangeId}
            className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
            placeholder="아이디"
          />
        </label>
        <label className="block">
          <span className="block my-1.5 text-sm font-medium text-slate-700">닉네임</span>
          <input
            type="text"
            required
            onChange={onChangeNickname}
            className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
            placeholder="닉네임"
          />
        </label>
        <label className="block">
          <span className="block my-1.5 text-sm font-medium text-slate-700">비밀번호</span>
          <input
            type="password"
            required
            onChange={onChangePw}
            className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
            placeholder="비밀번호"
          />
        </label>
        <label className="block">
          <span className="block my-1.5 text-sm font-medium text-slate-700">비밀번호 확인</span>
          <input
            type="password"
            required
            // onChange={onChangePwCheck}
            className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
            placeholder="비밀번호 확인"
          />
        </label>
        <div className="flex flex-row justify-center my-4">
          <button
            type="submit"
            className="w-1/4 border border-black p-3 mr-3"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
          <button
            type="submit"
            className="w-1/4 border border-black bg-black text-white p-3"
            onClick={() => handleSignup(isIdValue, isNicknameValue, isPwValue)}
          >
            가입완료
          </button>
        </div>
      </div>
    </>
  );
}
