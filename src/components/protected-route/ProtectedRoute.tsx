import { Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  guestOnly?:boolean
}

export const ProtectedRoute = ({guestOnly = false} : ProtectedRouteProps) => {
  return <Outlet />;
};