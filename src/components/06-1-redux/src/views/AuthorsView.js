import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';

import db from '../../db.json';

const AuthorSubView = lazy(() =>
  import('./AuthorSubView.js' /* webpackChunkName: "authors-subview"*/)
);

export default function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    setAuthors(db.authors);
  }, []);

  // console.log(authors);

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
