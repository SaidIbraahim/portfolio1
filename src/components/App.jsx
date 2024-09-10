import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Stats from "./Stats";
import Skills from "./Skills";
import Projects from "./Projects";
import HireMe from "./HireMe";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Stats/>
      <Skills />
      <Projects />
      <HireMe />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
