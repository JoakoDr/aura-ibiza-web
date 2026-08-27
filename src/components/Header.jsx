import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">

      <Link to="/" className="logo-container">

        <img
          src="/images/logo.webp"
          alt="AuraIbiza Logo"
          className="logo-image"
        />

        <span className="logo-text">
          AURA IBIZA
        </span>

      </Link>

      <nav>
        <a href="#services">Services</a>
        <a href="#experience">Experiences</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>
      </nav>

      <Link
        to="/planificar"
        className="header-btn"
      >
        Plan a trip
      </Link>

    </header>
  );
}

export default Header;