import Hero from "./components/Hero";
import CategorySlider from "./components/CategorySlider";
import FeaturedSection from "./components/FeaturedSection";
import BestSelling from "./components/BestSelling";
import CulinaryMasterpieces from "./components/CulinaryMasterpieces";
import ReservationSection from "./components/ReservationSection";
import PatronsSection from "./components/PatronsSection";
import BlogSection from "./components/BlogSection";

function App() {
  return (
    <div className="font-sans shrink-0">
      <Hero />
      <CategorySlider />
      <FeaturedSection />
      <BestSelling />
      <CulinaryMasterpieces />
      <ReservationSection />
      <PatronsSection />
      <BlogSection />
    </div>
  );
}

export default App;