import axios from 'axios';

function KonyvTorles({ bookId, onDeleted }) {
  const deleteBook = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/torleskonyv/${bookId}`);
      onDeleted(bookId);
    } catch (error) {
      console.error('Hiba a törlésnél:', error);
    }
  };

  return (
    <button className="delete-book" onClick={deleteBook}>
      Törlés
    </button>
  );
}

export default KonyvTorles;