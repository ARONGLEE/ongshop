import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

interface Auth {
  user: boolean;
  nickname: string;
  admin: boolean;
  login: (isIdValue: string, isPwValue: string) => Promise<void>;
}
interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<Auth | null>(null);

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('');
  const [admin, setAdmin] = useState<boolean>(false);

  const navigate = useNavigate();
  const login = async (isIdValue: string, isPwValue: string) => {
    const res = await instance.post('/signin', {
      id: isIdValue,
      password: isPwValue,
    });
    window.console.log(res);
    if (res.status === 200) {
      window.console.log(res);
      const token = res.data.data.accessToken;
      const nickname = res.data.data.nickname;
      const admin = res.data.data.admin;
      localStorage.setItem('token', token);
      setUser(true);
      setNickname(nickname);
      setAdmin(admin);
      navigate('/');
    }
  };
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, nickname, admin }}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  window.console.log('useAuthContext()');
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
}
