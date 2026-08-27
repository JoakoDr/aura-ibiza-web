import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCardYates from "../components/PropertyCardYates";
import yatchs from "../data/yatchsData";

function Yatchs() {
  return (
    <>
      <Header />

      <section className="listing-page">
        <h1>Yatchs</h1>

        <div className="listing-grid">
          {yatchs.map((yatch, index) => (
            <PropertyCardYates item={yatch} key={index} />
          ))}
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default Yatchs;