import Hero from "./Hero";
import Skills from "./Skills";
import Contact from "./Contact";
import Highlight from "./Highlights";
import ServiceAbout from "./ServiceAbout";

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceAbout />
      <Skills />
      <Highlight />
      <Contact />
    </>
  );
}

export default HomePage;
