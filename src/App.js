import Food from "./components/Food";
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
      <div className="py-20 bg-black">ok</div>
    </div>
  );
}

export default App;
