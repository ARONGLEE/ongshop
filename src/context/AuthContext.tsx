import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

interface Auth {
  // user: AuthData;
  user: boolean;
  login: (isIdValue: string, isPwValue: string) => Promise<void>;
}
interface Props {
  children: React.ReactNode;
}
// interface AuthData {
//   assessToken: string;
//   id: string;
//   admin: boolean;
//   nickname: string;
//   memberNo: number;
// }

const AuthContext = createContext<Auth | null>(null);

export function AuthContextProvider({ children }: Props) {
  // const [user, setUser] = useState<AuthData>({
  //   assessToken: '',
  //   id: '',
  //   admin: false,
  //   nickname: '',
  //   memberNo: 0,
  // });
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  const login = async (isIdValue: string, isPwValue: string) => {
    const res = await instance.post('/signin', {
      id: isIdValue,
      password: isPwValue,
    });
    window.console.log(res);
    if (res.status === 200) {
      window.console.log(res);
      localStorage.setItem('token', res.data.result.accessToken);
      localStorage.setItem('admin', res.data.result.admin);
      localStorage.setItem('nickname', res.data.result.nickname);
      localStorage.setItem('memberNo', res.data.result.memberNo);
      // setUser(res.data.result);
      setUser(true);
      navigate('/');
    }
  };
  // window.console.log(user);
  // const authValue = useMutation(({isIdValue: string, isPwValue: string }) => {
  //   login(isIdValue, isPwValue)
  // })
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(true);
    }
  }, []);

  return <AuthContext.Provider value={{ login, user }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  window.console.log('useAuthContext()');
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
}
