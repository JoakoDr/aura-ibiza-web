import SEO from "../components/SEO";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCardVillas from "../components/PropertyCardVillas";
import villas from "../data/villasData";

function Villas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Luxury Villas in Ibiza",
    description:
      "Discover exclusive luxury villas in Ibiza with Aura Ibiza. Premium properties, exceptional locations and tailor-made experiences for your stay.",
    url: "https://auraibiza.vip/villas",

    isPartOf: {
      "@type": "WebSite",
      name: "Aura Ibiza",
      url: "https://auraibiza.vip/",
    },

    about: {
      "@type": "Service",
      name: "Luxury Villa Rental in Ibiza",
      serviceType: "Luxury Villa Rental",
      areaServed: {
        "@type": "Place",
        name: "Ibiza, Spain",
      },
      provider: {
        "@type": "Organization",
        name: "Aura Ibiza",
        url: "https://auraibiza.vip/",
      },
    },
  };

  return (
    <>
      <SEO
        title="Luxury Villas in Ibiza | Aura Ibiza"
        description="Discover exclusive luxury villas in Ibiza with Aura Ibiza. Premium properties, exceptional locations and tailor-made experiences for your stay."
        canonical="https://auraibiza.vip/villas"
        schema={schema}
      />

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