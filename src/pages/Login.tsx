import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { LoginFormType } from '../types/auth';

export default function Login() {
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({ mode: 'onChange' });

  const onSubmit = (data: LoginFormType) => {
    const { id, password } = data;
    login(id, password);
  };

  return (
    <>
      <div className="flex flex-col my-5 w-3/6 mx-auto">
        <h1 className="font-semibold my-6 font-nanumSquareNeoR text-lg">로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">
            <span className="block my-1.5 text-sm font-medium text-slate-700 font-nanumSquareNeoR">
              아이디
            </span>
            <input
              type="text"
              required
              className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
              placeholder="아이디"
              {...register('id', {
                minLength: {
                  value: 4,
                  message: '아이디는 최소 4글자입니다.',
                },
                maxLength: {
                  value: 20,
                  message: '아이디는 최대 20글자입니다.',
                },
                required: true,
                pattern: {
                  value: /^[a-zA-z0-9]+$/,
                  message: '아이디는 영어 대/소문자, 숫자만 가능합니다',
                },
              })}
            />
            {errors?.id && (
              <p className="font-nanumSquareNeoR text-xs text-[#D0312D]">{errors.id.message}</p>
            )}
          </label>
          <label className="block">
            <span className="block my-1.5 text-sm font-medium text-slate-700 font-nanumSquareNeoR">
              비밀번호
            </span>
            <input
              type="password"
              required
              className="w-full h-10 px-3 mb-2 text-xs text-gray-700 placeholder-gray-600 border focus:shadow-outline"
              placeholder="비밀번호"
              {...register('password', {
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8글자입니다.',
                },
                maxLength: {
                  value: 20,
                  message: '비밀번호는 최대 20글자입니다.',
                },
                required: true,
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=])(?!.*\\s).*$/,
                  message: '비밀번호는 숫자+영어+특수문자 조합으로 입력해주세요.',
                },
              })}
            />
            {errors?.password && (
              <p className="font-nanumSquareNeoR text-xs text-[#D0312D]">
                {errors.password.message}
              </p>
            )}
          </label>
          <div className="my-4">
            <button
              type="submit"
              className="w-full border border-black bg-black text-white p-3 font-googleRoboto"
            >
              LOGIN
            </button>
            <button
              className="font-semibold text-sm mt-3 font-nanumSquareNeoR"
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
