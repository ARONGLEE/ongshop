import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin }: ProtectedRouteProps) {
  const { user } = useAuthContext();
  const admin = localStorage.getItem('admin');

  if (!user || (requireAdmin && !admin)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
