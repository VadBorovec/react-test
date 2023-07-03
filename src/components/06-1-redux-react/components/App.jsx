import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import publications from '../publications.json';
import { LoginPage, DashboardPage, Player, Reader, Images } from '../pages';

export const App1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/reader" element={<Reader items={publications} />} />
        <Route path="/images" element={<Images />} />
        <Route path="/products/:pId" element={<div>Product page</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
