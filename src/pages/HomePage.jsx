import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div id="home" className="bg-dark-bg text-white min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-8">
        <HeroSection />
        <AboutMe />
        <Projects id="projects" />
        <ContactMe id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
