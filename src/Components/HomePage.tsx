import Hero from "./Hero";
import { Music } from "./Music";
import Service from "./Service";
import Skills from "./Skills";
import Contact from "./Contact";
import Highlight from "./Highlights";
import Designs from "./Designs";

function HomePage() {
  return (
    <>
      <Hero />
      <Music />
      <Service />
      <Skills />
      <Highlight />
      <Designs/>
      <Contact />
    </>
  );
}

export default HomePage;
