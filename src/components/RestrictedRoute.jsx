import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserDataIsLoggedIn } from '../redux/auth/slice';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
