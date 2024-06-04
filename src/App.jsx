import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import MostViewedProducts from "./components/MostViewedProducts";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <HeroCarousel />
      <MostViewedProducts />
      <AboutSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App
