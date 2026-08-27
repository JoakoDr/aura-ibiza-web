import { Link } from "react-router-dom";
import "../styles/services.css";

const services = [
  {
    title: "Luxury Villas",
    image: "/images/villa.webp",
    link: "/villas"
  },
  {
    title: "Private Yachts",
    image: "/images/yatch.webp",
    link: "/yachts"
  },
  {
    title: "VIP Events",
    image: "/images/event.webp",
    link: "/planificar"
  },
  {
    title: "Transportation",
    image: "/images/transport.webp",
    link: "/planificar"
  }
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-top">
        <p>PREMIUM SERVICES</p>
        <h2>Personalized experiences</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link
            to={service.link}
            className="service-card"
            key={index}
            style={{
              backgroundImage: `url(${service.image})`
            }}
          >
            <div className="card-overlay">
              <h3>{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;