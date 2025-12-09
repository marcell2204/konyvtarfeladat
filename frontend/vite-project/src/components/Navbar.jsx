import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <p><Link to="/">Könyvek</Link></p>
        <p><Link to="/hozzaad">Hozzáadás</Link></p>
        <p><Link to="/torles">Törlés</Link></p>
      </div>
    </nav>
  );
}

export default Navbar;
