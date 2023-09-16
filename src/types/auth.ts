export interface NicknameProp {
  user: string | null;
}

export interface Auth {
  user: boolean;
  login: (isIdValue: string, isPwValue: string) => Promise<void>;
}

export interface Props {
  children: React.ReactNode;
}

export interface LoginFormType {
  id: string;
  password: string;
}

export interface SignupFormType {
  id: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
