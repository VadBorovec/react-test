import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Container from './components/Container';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/TodosView'));
const UploadView = lazy(() => import('./views/UploadView'));

export default function App1() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeView />} />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    redirectTo="/tasks"
                    component={<RegisterView />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/tasks" component={<LoginView />} />
                }
              />
              <Route
                path="/todos"
                element={
                  <PrivateRoute redirectTo="/login" component={<TodosView />} />
                }
              />
              <Route
                path="/upload"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<UploadView />}
                  />
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}

// !==========
