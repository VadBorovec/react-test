import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import db from '../../db.json';

export default function AuthorSubView({ authors }) {
  const location = useLocation();
  const { authorId } = useParams();
  const author = authors.find(author => author.id === Number(authorId));
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksArray = db.books;
    const parseAuthorId = parseInt(authorId);
    const searchedBook = booksArray.filter(
      book => book.authorId === parseAuthorId
    );

    // console.log(searchedBook);
    setBooks(searchedBook);
  }, [authorId]);

  return (
    <>
      <h2>{author.name}</h2>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link
              to={{
                pathname: `/books/${book.id}`,
                state: {
                  from: {
                    location,
                    label: 'Назад к автору',
                  },
                },
              }}
            >
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
