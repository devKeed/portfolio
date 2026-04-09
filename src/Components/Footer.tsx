import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner shell shell--wide">
        <div className="site-footer__brand">
          <p className="eyebrow">Fortune Adebiyi</p>
          <p className="site-footer__statement">
            Software engineer building product experiences with clear structure,
            careful motion, and maintainable systems.
          </p>
        </div>

        <div className="site-footer__links">
          <p className="site-footer__heading">Navigate</p>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="site-footer__links">
          <p className="site-footer__heading">Connect</p>
          <a href="mailto:fortuneadebiyi@gmail.com">fortuneadebiyi@gmail.com</a>
          <a href="tel:+2347063807894">+234 706 380 7894</a>
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

      <div className="site-footer__base shell shell--wide">
        <p>Based in Lagos, Nigeria.</p>
        <p>© {currentYear} Fortune Adebiyi.</p>
      </div>
    </footer>
  );
};
