
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import UXUIProjects from "@/components/UXUIProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <UXUIProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
