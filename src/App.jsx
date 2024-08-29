import { useState } from "react";
import TopSection from "./components/TopSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="px-10">
      <TopSection />
      <Skills />
      <Projects />
      <ContactSection />
    </div>
  );
}

export default App;
