import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Services from "./sections/services/Services";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}

export default App;
