import { useEffect } from 'react'
import './App.css'
import Header from './component/header'
import Hero from './component/hero'
import About from './component/about'
import Skills from './component/skills'
import Project from './component/project'
import Experience from './component/experience'
import Contact from './component/contact'
import Footer from './component/footer'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => section.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
