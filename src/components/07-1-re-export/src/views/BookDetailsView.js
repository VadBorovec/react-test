import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom'; // useHistory
import PageHeading from '../components/PageHeading/PageHeading';

import db from '../../db.json';

export default function BookDetailsView() {
  const location = useLocation();
  const { slug } = useParams();
  const bookId = parseInt(slug.match(/[a-z0-9]+$/)[0], 10);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const booksArray = db.books;
    const searchedBook = booksArray.find(book => book.id === bookId);

    // console.log(searchedBook);
    setBook(searchedBook);
  }, [bookId]);

  return (
    <>
      <PageHeading text={`Книга ${slug}`} />

      {book && (
        <>
          <Link to={location?.state?.from?.location ?? '/books'}>
            {location?.state?.from?.label ?? 'Назад'}
          </Link>
          <hr />

          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          {/* <p>Автор: {book.author.name}</p> */}
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
