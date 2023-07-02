import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
