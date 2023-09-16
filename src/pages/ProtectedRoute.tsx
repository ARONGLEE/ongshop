import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { ProtectedRouteProp } from '../types/route';

export default function ProtectedRoute({ children, requireAdmin }: ProtectedRouteProp) {
  const { user } = useAuthContext();
  const admin = localStorage.getItem('admin');

  if (!user || (requireAdmin && !admin)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
