import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/yachtbooking.css";

function Planificar() {
  return (
    <>
      <Header />

      <section
        className="yacth-section"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1920&q=80')"
        }}
      >


        <div className="yacth-content">

          <div className="yacth-hero">

            <p>
              PRIVATE YACHT EXPERIENCE
            </p>

            <h1>
            Charter your
            <br />
            luxury yacht
          </h1>

            <span>
              Discover Ibiza from the sea with
            exclusive yacht experiences tailored
            to your lifestyle and expectations.
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