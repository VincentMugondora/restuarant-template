import Hero from "./components/Hero";
import CategorySlider from "./components/CategorySlider";
import FeaturedSection from "./components/FeaturedSection";
import BestSelling from "./components/BestSelling";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <CategorySlider />
      <FeaturedSection />
      <BestSelling />
    </div>
  );
}

export default App;