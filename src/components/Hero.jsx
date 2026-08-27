import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/hero.webp')"
      }}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="hero-subtitle">
          LUXURY HOSPITALITY · IBIZA
        </p>

        <h1>
          Exclusive Luxury
          <br />
          Experiences
        </h1>

        <p className="hero-description">
          Villas, yachts, VIP tables and premium experiences designed for
          exceptional clients in Ibiza and beyond.
        </p>

        <div className="hero-buttons">

          <a
            href="#services"
            className="primary-btn"
          >
            Explore Experiences
          </a>

          <Link
            to="/planificar"
            className="secondary-btn"
          >
            Contact Concierge
          </Link>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;