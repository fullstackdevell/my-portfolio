import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";

function HomePage() {
  return (
    <div className="bg-dark-bg text-white min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-8">
        <HeroSection />
        <AboutMe />
      </main>
    </div>
  );
}

export default HomePage;
