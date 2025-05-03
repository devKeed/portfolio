import MainBar from "./MainBar";
import Hero from "./Hero";
import { Footer } from "./Footer";
import { Music } from "./Music";
import Service from "./Service";
import Skills from "./Skills";
// import Projects from "./Projects";
import Contact from "./Contact";
import Highlight from "./Highlights";
import Designs from "./Designs";
import { useTheme } from "@mui/material";

function HomePage() {
  // Get the theme from the context (which includes light/dark mode)
  const theme = useTheme();

  return (
    <>
      <MainBar />
      <div
        style={{
          margin: "auto",
          maxWidth: "1100px",
          overflow: "hidden",
          // backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Hero />
        <Music />
        <Service />
        <Skills />
        <Highlight />
        <Designs/>
        {/* <Projects /> */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
