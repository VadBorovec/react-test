import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

//! ==============
// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

// /**
//  * 1. Он должен повторять API Route
//  *  2. Он должен рендерить Route
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на redirectTo
//  */

// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to={redirectTo} />}
//     </Route>
//   );
// }
