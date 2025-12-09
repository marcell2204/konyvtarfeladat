import { useEffect, useState } from 'react';
import axios from 'axios';

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
      console.error('Error fetching books:', error);
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
          <li key={book.konyv_id}>
            <span>{book.cim}</span>
            <button onClick={() => onDelete(book.konyv_id)}>Törlés</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Konyvek;