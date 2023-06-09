import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import slugify from 'slugify';
import PageHeading from '../components/PageHeading/PageHeading';

import db from '../../db.json';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(db.books);
  }, []);

  // console.log(books);

  return (
    <>
      <PageHeading text="Книги" />

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${makeSlug(`${book.title} ${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: 'Назад к всем книгами',
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
