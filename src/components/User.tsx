import { NicknameProp } from '../types/auth';

export default function User({ user }: NicknameProp) {
  return <div className="mx-4">{user}</div>;
}
