import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageHeading } from '../components/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

const AuthorSubView = lazy(() =>
  import('./AuthorSubView.js' /* webpackChunkName: "authors-subview"*/)
);

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Загружаем подмаршрут...</h1>}>
        <Routes>
          <Route
            path={`:authorId`}
            element={authors && <AuthorSubView authors={authors} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
