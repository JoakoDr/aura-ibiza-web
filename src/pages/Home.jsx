import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Stats from "../components/Stats";
import BookingForm from "../components/BookingForm";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import InstagramFeed from "../components/InstagramFeed";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Stats />
      <BookingForm />
      <Testimonials />
      <InstagramFeed />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;