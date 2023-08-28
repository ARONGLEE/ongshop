import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import User from './User';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, nickname, admin } = useAuthContext();

  window.console.log(user);
  window.console.log(nickname);
  window.console.log(admin);

  return (
    <header className="flex flex-row justify-between py-2.5 border-b border-gray-300">
      <Link to="/">
        <h1 className="mx-4 text-2xl font-bold font-googleOswald cursor-grabbing">ONGSHOP</h1>
      </Link>
      <nav className="flex items-end text-base font-googleRoboto">
        <Link to="/products">
          <div className="mx-4 cursor-grabbing">Products</div>
        </Link>
        <Link to="/carts">
          <div className="mx-4 cursor-grabbing">Carts</div>
        </Link>
        {user && admin && (
          <Link to="/products/new">
            <div
              className="mx-4 cursor-grabbing"
              onClick={() => {
                navigate('/products/new');
              }}
            >
              Product Registration
            </div>
          </Link>
        )}
        {user && <User user={nickname} />}
        {!user && (
          <div
            className="mx-4 cursor-grabbing"
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </div>
        )}
        {user && (
          <div
            className="mx-4 cursor-grabbing"
            onClick={() => {
              navigate('/');
            }}
          >
            Logout
          </div>
        )}
      </nav>
    </header>
  );
}
