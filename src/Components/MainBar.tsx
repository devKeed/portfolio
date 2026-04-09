import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ColorModeContext } from "./color-mode-context";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const MainBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner shell shell--wide">
          <Link className="brand" to="/" aria-label="Fortune Adebiyi home">
            <span className="brand__primary">Fortune</span>
            <span className="brand__accent">Adebiyi</span>
          </Link>

          <div className="site-header__actions">
            <button
              type="button"
              className="mode-toggle"
              onClick={toggleColorMode}
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
            >
              <span>{mode === "dark" ? "Light" : "Dark"}</span>
            </button>

            <button
              type="button"
              className={`menu-toggle${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`menu-overlay${menuOpen ? " is-open" : ""}`}>
        <div className="menu-overlay__inner shell shell--wide">
          <div className="menu-overlay__meta" data-hero-fade>
            <p className="eyebrow">Navigation</p>
            <p className="menu-overlay__note">
              Lagos-based software engineer building web, product, and platform
              experiences with a frontend eye and a backend mindset.
            </p>
          </div>

          <nav className="menu-overlay__nav" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const active = location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`menu-overlay__link${active ? " is-active" : ""}`}
                >
                  <span className="menu-overlay__index">
                    {String(navigationItems.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="menu-overlay__contact">
            <a href="mailto:fortuneadebiyi@gmail.com">fortuneadebiyi@gmail.com</a>
            <a href="https://github.com/pledreDev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fortuneadebiyi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBar;
