import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HozzaAd from './components/UjKonyv';
import Konyvek from './components/Konyvek';
import KonyvTorles from './components/KonyvTorles';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Konyvek />} />
          <Route path="/hozzaad" element={<HozzaAd />} />
          <Route path="/torles" element={<KonyvTorles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
