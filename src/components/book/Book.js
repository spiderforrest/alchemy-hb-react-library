import Author from '../author/Author';
import './Book.css';
import { Link } from 'react-router-dom';

function Book({
  book: { title, total_pages: totalPages, rating, isbn, published_date: publishedDate, authors },
  showDetail = false,
  book_id,
}) {
  return (
    <article className="book">
      <Link to={`/books/${book_id}`}>
        <h3>{title}</h3>
        <address>
          {authors.map((author) => (
            <Author key={author.author_id} author={author} />
          ))}
        </address>
        {showDetail && (
          <>
            <p>Rating: {rating}</p>
            <p>ISBN: {isbn}</p>
            <p>Published {publishedDate}</p>
            <p>{totalPages} pages</p>
          </>
        )}
      </Link>
    </article>
  );
}

export default Book;
