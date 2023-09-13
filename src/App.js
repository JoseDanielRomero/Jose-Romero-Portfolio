import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-white">
      <header className="h-[500px] px-8 md:px-16 lg:px-24 bg-gradient-to-b from-violet-100 to-white">
        <Navbar />
        <HeroSection />
      </header>
    </div>
  );
}

export default App;
