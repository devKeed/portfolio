import Hero from "./Hero";
// import { Music } from "./Music";
import Service from "./Service";
import Skills from "./Skills";
import Contact from "./Contact";
import Highlight from "./Highlights";
import Designs from "./Designs";
import ServiceAbout from "./ServiceAbout";
import { Music } from "./Music";

function HomePage() {
  return (
    <>
      <Hero />
     
      {/* <Service /> */}
 
      <ServiceAbout />

      <Skills />
      <Highlight />
      {/* <Designs/> */}
      <Contact />
    </>
  );
}

export default HomePage;
