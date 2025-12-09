import { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

function Konyvek({ onDelete }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/konyvek');
      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Hiba a könyvek lekérdezésénél:', error);
    }
  };

  if (loading) {
    return <p>Betöltés...</p>;
  }

  return (
    <div className="books">
      <h1>Könyvek</h1>
      <ul>
        {books.map((book) => (
          <ul key={book.konyv_id}>
            <span className='span'>{book.cim}        {book.konyv_id}</span>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Konyvek;