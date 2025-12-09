import { useState } from 'react';
import axios from 'axios';

function HozzaAdas({ onBookAdded }) {
  const [formData, setFormData] = useState({
    cim: '',
    alcim: '',
    isbn: '',
    feltoltoID: '',
    leiras: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/ujkonyvek', formData);
      onBookAdded(response.data);
      setFormData({ cim: '', alcim: '', isbn: '', feltoltoID: '', leiras: '' });
    } catch (error) {
      console.error('Hiba a könyv hozzáadásánál:', error);
    }
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <h2>Új könyv</h2>
      <input
        type="text"
        name="cim"
        placeholder="cim"
        value={formData.cim}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="alcim"
        placeholder="alcim"
        value={formData.alcim}
        onChange={handleChange}
      />
      <input
        type="text"
        name="isbn"
        placeholder="ISBN"
        value={formData.isbn}
        onChange={handleChange}
      />
      <input
        type="number"
        name="feltoltoID"
        placeholder="Publisher ID"
        value={formData.feltoltoID}
        onChange={handleChange}
      />
      <textarea
        name="leiras"
        placeholder="leiras"
        value={formData.leiras}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Hozzáad</button>
    </form>
  );
}

export default HozzaAdas;