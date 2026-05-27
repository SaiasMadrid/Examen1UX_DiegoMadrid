import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">NETFLIX</div>
        <ul className="navbar__links">
          <li>Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Novedades populares</li>
          <li>Mi lista</li>
          <li>Explorar por idiomas</li>
        </ul>
      </div>

      <div className="navbar__right">
        <span className="navbar__icon">🔍</span>
        <span className="navbar__icon">🔔</span>
        <div className="navbar__profile">
          <div className="navbar__avatar" />
          <span className="navbar__arrow">▼</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;