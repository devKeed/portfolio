import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import Blog from "./Blog";
import { Footer } from "./Footer";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";
import LoadingScreen from "./LoadingScreen";
import MainBar from "./MainBar";
import { ColorModeContext } from "./color-mode-context";

function ScrollManager() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">(() => {
    const stored = window.localStorage.getItem("portfolio-mode");
    return stored === "light" ? "light" : "dark";
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    window.localStorage.setItem("portfolio-mode", mode);
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ScrollManager />
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="site-root">
          <MainBar />
          <main className="site-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </ColorModeContext.Provider>
  );
}
