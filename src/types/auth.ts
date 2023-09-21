export type NicknameProp = {
  user: string | null;
};

export interface Auth {
  user: boolean;
  login: (isIdValue: string, isPwValue: string) => Promise<void>;
}

export type Props = {
  children: React.ReactNode;
};

export type LoginFormType = {
  id: string;
  password: string;
};

export type SignupFormType = {
  id: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};
