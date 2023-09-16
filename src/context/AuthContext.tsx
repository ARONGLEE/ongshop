import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';
import { Auth, Props } from '../types/auth';
import swal from 'sweetalert';

const AuthContext = createContext<Auth | null>(null);

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  const login = async (isIdValue: string, isPwValue: string) => {
    try {
      const res = await instance.post('/signin', {
        id: isIdValue,
        password: isPwValue,
      });

      if (res.data.status === 'success') {
        localStorage.setItem('token', res.data.result.accessToken);
        localStorage.setItem('admin', res.data.result.admin);
        localStorage.setItem('nickname', res.data.result.nickname);
        localStorage.setItem('memberNo', res.data.result.memberNo);
        setUser(true);
        navigate('/');
      } else {
        swal(res.data.message);
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(true);
    }
  }, []);

  return <AuthContext.Provider value={{ login, user }}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
}
