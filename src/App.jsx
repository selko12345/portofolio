import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import ScrollTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <ScrollTop />
      <Footer />
    </>
  )
}

export default App
