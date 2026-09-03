import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/planificar.css";

function Planificar() {
  return (
    <>
      <Helmet>
        <title>Plan Your Ibiza Experience | Luxury Concierge | Aura Ibiza</title>

        <meta
          name="description"
          content="Plan your perfect Ibiza experience with Aura Ibiza. Luxury villas, private yachts, VIP events and private transportation tailored to your lifestyle."
        />

        <link
          rel="canonical"
          href="https://auraibiza.vip/planificar"
        />

        <meta
          property="og:title"
          content="Plan Your Ibiza Experience | Aura Ibiza"
        />

        <meta
          property="og:description"
          content="Create a tailor-made luxury experience in Ibiza with Aura Ibiza."
        />

        <meta
          property="og:url"
          content="https://auraibiza.vip/planificar"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Aura Ibiza"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Header />

      <section
        className="planificar-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85')"
        }}
      >

        <div className="planificar-content">

          <div className="planificar-hero">

            <p>
              LUXURY CONCIERGE
            </p>

            <h1>
              Plan your
              <br />
              Ibiza experience
            </h1>

            <span>
              Tailor-made luxury experiences designed
              around your lifestyle.
            </span>

          </div>

          <BookingForm />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Planificar;