import SEO from "../components/SEO";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCardYates from "../components/PropertyCardYates";
import yatchs from "../data/yatchsData";

function Yatchs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Private Yachts in Ibiza",
    description:
      "Discover private yachts in Ibiza with Aura Ibiza. Enjoy exclusive yacht experiences, luxury boats and tailor-made days at sea.",
    url: "https://auraibiza.vip/yachts",

    isPartOf: {
      "@type": "WebSite",
      name: "Aura Ibiza",
      url: "https://auraibiza.vip/",
    },

    about: {
      "@type": "Service",
      name: "Private Yacht Rental in Ibiza",
      serviceType: "Private Yacht Rental",
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
        title="Private Yachts in Ibiza | Yacht Rental | Aura Ibiza"
        description="Discover private yachts in Ibiza with Aura Ibiza. Enjoy exclusive yacht experiences, luxury boats and tailor-made days at sea."
        canonical="https://auraibiza.vip/yachts"
        schema={schema}
      />

      <Header />

      <section className="listing-page">
        <h1>Yachts</h1>

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