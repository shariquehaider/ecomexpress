import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children } : { children : ReactNode}) => {
  const { isAuthenticated } = useSelector((state: any) => state.userLogin);

  
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, allow access to the component
  return children;
};

export default ProtectedRoute;