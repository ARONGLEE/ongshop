import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row justify-between py-2.5 border-b border-gray-300">
      <Link to="/">
        <h1 className="mx-4 text-2xl font-bold font-googleOswald cursor-grabbing">ONGSHOP</h1>
      </Link>
      <nav className="flex items-end text-base font-googleRoboto">
        <Link to="/products">
          <div className="mx-4 cursor-grabbing">products</div>
        </Link>
        <Link to="/carts">
          <div className="mx-4 cursor-grabbing">Carts</div>
        </Link>
        <Link to="/products/new">
          <div className="mx-4 cursor-grabbing">product registration</div>
        </Link>
        <div
          className="mx-4 cursor-grabbing"
          onClick={() => {
            navigate('/login');
          }}
        >
          login
        </div>
      </nav>
    </header>
  );
}
