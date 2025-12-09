import { useState } from 'react';
import axios from 'axios';

function KonyvTorles({ onDeleted }) {
  const [bookId, setBookId] = useState('');

  const deleteBook = async () => {
    if (!bookId) {
      alert('Kérlek add meg a könyv ID-jét!');
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/api/torleskonyv/${bookId}`);
      onDeleted(bookId);
      setBookId('');
    } catch (error) {
      console.error('Hiba a törlésnél:', error);
    }
  };

  return (
    <div className="delete-section">
      <input
        type="text"
        placeholder="Könyv ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      
      <button className="delete-book" onClick={deleteBook}>
        Törlés
      </button>
    </div>
  );
}

export default KonyvTorles;