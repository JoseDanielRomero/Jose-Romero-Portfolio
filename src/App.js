import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProyectsSection from "./components/ProyectsSection";

function App() {
  return (
    <div className="h-screen w-screen bg-white">
      <header className="h-auto px-8 md:px-16 lg:px-24 bg-gradient-to-b from-violet-100 to-white">
        <Navbar />
        <HeroSection />
      </header>
      <main className="h-auto px-8 md:px-16 lg:px-24">
        <AboutSection />
        <ProyectsSection />
      </main>
    </div>
  );
}

export default App;
