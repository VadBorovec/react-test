import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */)
);
const AuthorsView = lazy(() =>
  import('./views/AuthorsView' /* webpackChunkName: "authors-view" */)
);
const BooksView = lazy(() =>
  import('./views/BooksView' /* webpackChunkName: "books-view" */)
);
const BookDetailsView = lazy(() =>
  import('./views/BookDetailsView' /* webpackChunkName: "book-view" */)
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "404-view" */)
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors/*" element={<AuthorsView />} />
        <Route path="books" element={<BooksView />} end />
        <Route path="books/:slug" element={<BookDetailsView />} />
        <Route element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
