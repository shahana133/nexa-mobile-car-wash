import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="navbar-logo">
        <img src="/src/assets/nexa-logo.jpg" alt="NEXA AutoCare" />
      </a>

      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#why-nexa">Why NEXA</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="navbar-book">
        BOOK SERVICE
      </a>

    </nav>
  );
}

export default Navbar;