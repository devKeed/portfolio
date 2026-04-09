import MyButton from "./reusables/MyButton";
import { usePageMotion } from "./reusables/usePageMotion";

const heroStats = [
  { value: "9+", label: "products shipped across web and mobile" },
  { value: "Lagos", label: "working with teams locally and remotely" },
  { value: "Fullstack", label: "frontend craft with backend depth" },
];

const Hero = () => {
  const scopeRef = usePageMotion<HTMLElement>();

  return (
    <section className="hero section shell shell--wide" ref={scopeRef}>
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow" data-hero-fade>
            Fortune Adebiyi / Software Engineer / Lagos, Nigeria
          </p>

          <div className="hero-title">
            <span className="split-line">
              <span className="split-line__inner" data-hero-line>
                Fortune Adebiyi
              </span>
            </span>
            <span className="split-line">
              <span className="split-line__inner" data-hero-line>
                builds digital products
              </span>
            </span>
            <span className="split-line">
              <span className="split-line__inner" data-hero-line>
                with structure and taste.
              </span>
            </span>
          </div>

          <p className="hero-summary" data-hero-fade>
            Fullstack software engineer focused on frontend clarity, backend
            reliability, and product experiences that feel deliberate from the
            first interaction to the final state.
          </p>

          <div className="hero-actions" data-hero-fade>
            <MyButton text="View selected work" link="/projects" />
            <MyButton
              text="Download CV"
              link="https://docs.google.com/document/d/1G1YqBPGk9_DCQHc5rBF_dkiBu_fn15KGLiklEJ7hf_I/export?format=pdf"
              subdued
            />
          </div>

          <div className="hero-facts" data-hero-fade>
            {heroStats.map((item) => (
              <div className="hero-fact" key={item.label}>
                <span className="hero-fact__value">{item.value}</span>
                <span className="hero-fact__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__media" data-hero-media data-parallax="soft">
          <div className="hero__media-frame">
            <div className="hero__stamp">Available for select collaborations</div>
            <img
              src="/images/fortune_image.webp"
              alt="Portrait of Fortune Adebiyi"
              className="hero__portrait"
            />
          </div>
        </div>
      </div>

      <div className="hero-marquee" data-hero-fade>
        <div className="hero-marquee__track">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Flutter</span>
          <span>Product Systems</span>
          <span>Interface Design</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Flutter</span>
          <span>Product Systems</span>
          <span>Interface Design</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
