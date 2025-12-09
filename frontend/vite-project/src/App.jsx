import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HozzaAd from './components/UjKonyv';
import Konyvek from './components/Konyvek';

import './App.css';
import KonyvTorles from './components/KonyvTorles';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Konyvek />} />
          <Route path="/hozzaad" element={<HozzaAd />} />
          <Route path="/torles" element={<KonyvTorles/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
