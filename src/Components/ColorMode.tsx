import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import { Footer } from "./Footer";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";

type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: "light" | "dark";
};

export const ColorModeContext = React.createContext<ColorModeContextType>({ 
  toggleColorMode: () => {},
  mode: "light"
});

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  // Create a theme that combines dark/light mode with the custom theme settings
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#8fff86",
          },
          secondary: {
            main: "#784ef4",
          },
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
            fontWeight: "8000",
            lineHeight: "1.2em",
            fontFamily: "PPValve-Medium, sans-serif;",
    
          },
          h2: {
            fontSize: "2.6rem",
            fontWeight: "8000",
            lineHeight: "1.2em",
            fontFamily: "PPValve-Medium, sans-serif;",
  
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "8000",
            lineHeight: "1.2em",
            fontFamily: "PPValve-Medium, sans-serif;",
    
          },
          h5: {
            fontFamily: "PPValve-Medium, sans-serif;",
          },
          button: {
            textTransform: "none",
            fontSize: 14,
            "&:hover": {
              color: "#fff !important",
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div style={{
          margin: "auto",
          overflow: "hidden",
          color: theme.palette.text.primary,
        }}>
          <div style={{ margin: "auto",  }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
