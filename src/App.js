import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProyectsSection from "./components/ProyectsSection";
import githubLogo from "./images/github-logo.png"
import linkedinLogo from "./images/linkedin-logo.png"


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
        <ContactSection />
      </main>
      <footer className="h-auto w-full px-8 md:px-16 lg:px-24 flex flex-col items-center justify-start mt-5 md:mt-14 bg-violet-100 pt-10 pb-16 gap-5">
        <div className="h-auto w-full flex flex-row items-center justify-center gap-5">
          <a href="https://github.com/JoseDanielRomero" target="_blank"><img src={githubLogo} alt="Github page" className="h-8 md:h-9 hover:grayscale-[30%] hover:contrast-150 transition ease-in-out"/></a>
          <a href="https://www.linkedin.com/in/jose-daniel-romero-t/" target="_blank"><img src={linkedinLogo} alt="Linkedin page" className="h-8 md:h-9 hover:grayscale-[30%] hover:contrast-150 transition ease-in-out"/></a>
        </div>
        <div className="h-auto w-full flex flex-col items-center justify-center">
          <p className="font-poppins text-base font-normal text-violet-500 text-center">
            Designed & Built by José Romero
          </p>
          <p className="font-poppins text-base font-normal text-violet-500 text-center">2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
