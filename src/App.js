import Categories from "./components/Categories";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HeadlineCards from "./components/HeadlineCards";
import HeroImage from "./components/HeroImage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <HeadlineCards />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
