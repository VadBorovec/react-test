import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// ! =================
// import { useSelector } from 'react-redux';
// import { Route, Navigate } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
//  * - В противном случае рендерит компонент
//  *
//  */

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Navigate to={redirectTo} /> : children}
//     </Route>
//   );
// }
