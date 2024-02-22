import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import User from './User';
import { CiMenuBurger } from 'react-icons/ci';
import { useState } from 'react';

export default function Navbar() {
  // const navigate = useNavigate();
  const { user } = useAuthContext();
  const admin = localStorage.getItem('admin') === 'true';
  const nickname = localStorage.getItem('nickname');
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleMenuItemClick = () => {
    setToggleOpen(false);
  };

  return (
    <header className="flex flex-row justify-between py-3 border-b border-black">
      <Link to="/">
        <h1 className="mx-4 text-3xl font-bold font-googleOswald cursor-grabbing">ONGSHOP</h1>
      </Link>
      <nav className="flex items-center text-base font-googleRoboto">
        <div className="md:hidden px-4 cursor-grabbing">
          <CiMenuBurger className="text-xl" onClick={() => setToggleOpen(!toggleOpen)} />
        </div>

        {toggleOpen && (
          <div className="md:hidden absolute z-50 top-16 left-0 w-full bg-white text-black">
            <ul className="flex flex-col text-black text-base font-bold">
              <Link to="/products">
                <li
                  className="flex p-4 items-center bg-white border-b border-black"
                  onClick={handleMenuItemClick}
                >
                  Products
                </li>
              </Link>
              {user && (
                <Link to="/carts">
                  <li
                    className="flex p-4 items-center bg-white border-b border-black"
                    onClick={handleMenuItemClick}
                  >
                    <CartStatus />
                  </li>
                </Link>
              )}
              {user && admin && (
                <Link to="/products/new">
                  <li
                    className="flex p-4 items-center bg-white border-b border-black"
                    onClick={handleMenuItemClick}
                  >
                    Product Registration
                  </li>
                </Link>
              )}
              {!user && (
                <Link to="/login">
                  <li
                    className="flex p-4 items-center bg-white border-b border-black"
                    onClick={handleMenuItemClick}
                  >
                    Login
                  </li>
                </Link>
              )}
              {user && (
                <li
                  className="flex p-4 items-center bg-white border-b border-black"
                  onClick={() => {
                    handleMenuItemClick;
                    localStorage.removeItem('token');
                    localStorage.removeItem('memberNo');
                    localStorage.removeItem('admin');
                    localStorage.removeItem('nickname');
                    window.location.replace('/');
                  }}
                >
                  Logout
                </li>
              )}
            </ul>
          </div>
        )}

        <ul className="hidden md:flex flex-row">
          <Link to="/products">
            <li className="mx-4">Products</li>
          </Link>
          {user && (
            <Link to="/carts">
              <li className="mx-4">
                <CartStatus />
              </li>
            </Link>
          )}
          {user && admin && (
            <Link to="/products/new">
              <li className="mx-4">Product Registration</li>
            </Link>
          )}
          {user && <User user={nickname} />}
          {!user && (
            <Link to="/login">
              <li className="mx-4">Login</li>
            </Link>
          )}
          {user && (
            <li
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
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
