import "../styles/experience.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      style={{
        backgroundImage: "url('/images/experience.webp')"
      }}
    >
      <div className="experience-overlay"></div>
      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="experience-left">

          <p className="experience-subtitle">
            EXCLUSIVE EXPERIENCES
          </p>

          <h2>
            Tailor-made luxury
            <br />
            experiences in Ibiza
          </h2>

        </div>

        <div className="experience-right">

          <p>
            We create unforgettable moments through
            luxury villas, yachts, VIP nightlife,
            transportation and concierge services
            designed around your lifestyle.
          </p>

          <Link
            to="/planificar"
            className="primary-btn"
          >
            Start your journey
          </Link>

        </div>

      </motion.div>
    </section>
  );
}

export default Experience;