import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from './AppBar';
import { Container } from './Container';

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
