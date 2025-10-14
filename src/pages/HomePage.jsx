import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

function HomePage() {
  return (
    <div id="home" className="bg-dark-bg text-white min-h-screen">
      <main className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-16"> 
        <HeroSection />
        <AboutMe />
        <Projects id="projects" />
        <ContactMe id="contact" />
      </main>
    </div>
  );
}

export default HomePage;
