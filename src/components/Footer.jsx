import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div>
          <h3>AURA IBIZA</h3>
          <p>Luxury Experiences & Villas</p>
        </div>

        <div>
            <h4>Services</h4>
            <Link to="/villas">
              Luxury Villas
            </Link>
            <Link to="/yachts">
              Private Yachts
            </Link>
          </div>

        <div>
          <h4>Contact</h4>
          <p>Ibiza</p>
          <p>d.decolsa@auraofibiza.com</p>
          <p>+34 643 147 805</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 AURA IBIZA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;