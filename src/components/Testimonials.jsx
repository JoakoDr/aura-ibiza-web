import "../styles/testimonials.css";

function Testimonials() {
  return (
    <section
      className="testimonials-section"
      style={{
        backgroundImage: "url('/images/testimonials.webp')"
      }}
    >
      <div className="testimonials-overlay"></div>

      <div className="testimonials-container">

        <p className="testimonials-subtitle">
          CLIENT TESTIMONIALS
        </p>

        <h2>
          Trusted by clients
          <br />
          around the world
        </h2>

        <div className="testimonial-card">

          <p>
            “Everything was handled perfectly from the
            moment we arrived in Ibiza. The villa,
            transportation and yacht experience exceeded
            all expectations.”
          </p>

          <span>
            — Sophia Williams · London
          </span>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;