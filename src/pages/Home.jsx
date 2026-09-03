import { Helmet } from "react-helmet-async";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Stats from "../components/Stats";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import InstagramFeed from "../components/InstagramFeed";

function Home() {
  return (
    <>
      <Helmet>
        <title>Aura Ibiza | Luxury Villas, Yachts & VIP Experiences</title>

        <meta
          name="description"
          content="Discover luxury villas, private yachts, VIP events and private transportation in Ibiza with Aura Ibiza. Exclusive experiences tailored to you."
        />

        <link
          rel="canonical"
          href="https://auraibiza.vip/"
        />

        <meta
          property="og:title"
          content="Aura Ibiza | Luxury Villas, Yachts & VIP Experiences"
        />

        <meta
          property="og:description"
          content="Luxury villas, private yachts, VIP events and private transportation in Ibiza."
        />

        <meta
          property="og:url"
          content="https://auraibiza.vip/"
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
          property="og:image"
          content="https://auraibiza.vip/images/hero.webp"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <Experience />
      <Stats />
      <BookingForm />
      <Testimonials />
      <InstagramFeed />
      <Footer />
    </>
  );
}

export default Home;