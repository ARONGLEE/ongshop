import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import User from './User';

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const admin = localStorage.getItem('admin') === 'true';
  const nickname = localStorage.getItem('nickname');

  return (
    <header className="flex flex-row justify-between py-3 border-b border-gray-300">
      <Link to="/">
        <h1 className="mx-4 text-3xl font-bold font-googleOswald cursor-grabbing">ONGSHOP</h1>
      </Link>
      <nav className="flex items-end text-base font-googleRoboto">
        <Link to="/products">
          <div className="mx-4 cursor-grabbing">Products</div>
        </Link>
        {user && (
          <Link to="/carts">
            <div className="mx-4 cursor-grabbing">
              <CartStatus />
            </div>
          </Link>
        )}
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
              localStorage.removeItem('token');
              localStorage.removeItem('memberNo');
              localStorage.removeItem('admin');
              localStorage.removeItem('nickname');
              window.location.replace('/');
            }}
          >
            Logout
          </div>
        )}
      </nav>
    </header>
  );
}
