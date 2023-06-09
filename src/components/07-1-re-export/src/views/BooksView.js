import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import slugify from 'slugify';
import { booksOperations, booksSelectors } from '../redux/books';
import { PageHeading } from '../components/PageHeading';

const makeSlug = string => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 && (
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
