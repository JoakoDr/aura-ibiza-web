import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/planificar.css";

function Planificar() {
  return (
    <>
      <Header />

      <section
        className="planificar-section"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85')"
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