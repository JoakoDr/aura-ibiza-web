import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCardVillas from "../components/PropertyCardVillas";
import villas from "../data/villasData";

function Villas() {
  return (
    <>
      <Header />

      <section className="listing-page">
        <h1>Luxury Villas</h1>

        <div className="listing-grid">
          {villas.map((villa, index) => (
            <PropertyCardVillas item={villa} key={index} />
          ))}
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Villas;