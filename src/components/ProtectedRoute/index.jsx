/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function ProtectedRoute ({redirectPath = '/login', children} ) {
  const {currentUser} = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to={redirectPath} state={{ from: location }} replace/>;
  }
  return (
    children ? children : <Outlet />
  );
}