// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/authSelectors';

// export const PublicRoute = ({ children, redirectPath = '/', restricted = false }) => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);
//     const shouldRedirect = isLoggedIn && restricted;

//   return shouldRedirect ? <Navigate to={redirectPath} /> : children;
// };
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/user" /> : children;
};
export default PublicRoute;