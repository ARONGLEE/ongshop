import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { login } from '../api/login';
import { useAuthContext } from '../context/AuthContext';

export default function Login() {
  const [isIdValue, setIsIdValue] = useState<string>('');
  const [isPwValue, setIsPwValue] = useState<string>('');
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsIdValue(e.target.value);
  }, []);
  const onChangePw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPwValue(e.target.value);
  }, []);

  const handleLogin = () => {
    window.console.log('dddd');

    login(isIdValue, isPwValue);
    //.then(() => {
    //  navigate('/');
    //});
  };

  return (
    <>
      <div className="flex flex-col my-5 w-3/6 mx-auto">
        <h1 className="font-medium my-4">로그인</h1>
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
          <span className="block my-1.5 text-sm font-medium text-slate-700">비밀번호</span>
          <input
            type="password"
            required
            onChange={onChangePw}
            className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
            placeholder="비밀번호"
          />
        </label>
        <div className="my-4">
          <button
            type="submit"
            className="w-full border border-black bg-black text-white p-3"
            onClick={() => handleLogin()}
          >
            로그인
          </button>
          <button
            type="submit"
            className="font-medium text-sm mt-3"
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
