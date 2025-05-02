import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

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

function HomePage() {
  const THEME = createTheme({
    palette: {
      primary: {
        main: "#8fff86",
      },
      secondary: {
        main: "#784ef4",
      },
      background: {},
    },
    typography: {
      fontFamily: "NeueRegular, sans-serif;",
      fontSize: 14,
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: "3.1rem",
        fontWeight: "bold",
        lineHeight: "1.2em",
        fontFamily: "Bricolage Grotesque, sans-serif;",
      },
      h2: {
        fontSize: "2.6rem",
        fontWeight: "bold",
        lineHeight: "1.2em",
        fontFamily: "Bricolage Grotesque, sans-serif;",
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        lineHeight: "1.2em",
        fontFamily: "Bricolage Grotesque, sans-serif;",
      },
      h5: {
        fontFamily: "Bricolage Grotesque, sans-serif;",
      },
      button: {
        textTransform: "none",
        fontSize: 14,
        "&:hover": {
          color: "#fff !important",
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={THEME}>
        <MainBar />
        <div
          style={{
            margin: "auto",
            maxWidth: "1100px",
            overflow: "hidden",
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
      </ThemeProvider>
    </>
  );
}

export default HomePage;
