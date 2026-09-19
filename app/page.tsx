import Contact from "../components/Contact";
import DigitalPresence from "../components/DigitalPresence";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Services from "../components/Services";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LombokWeb",
  image: "https://www.lombokweb.site/images/logo.webp",
  url: "https://www.lombokweb.site/",
  telephone: "+6288975555215",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lombok",
    addressRegion: "Nusa Tenggara Barat",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.5591031,
    longitude: 116.427306,
  },
  hasMap:
    "https://www.google.com/maps/place/LombokWeb+%E2%80%93+Jasa+Pembuatan+Website+Lombok/@-8.5591031,116.427306,17z",
  priceRange: "$$",
  sameAs: [
    "https://wa.me/6288975555215",
    "https://www.instagram.com/lombokweb.site",
  ],
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <DigitalPresence />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
