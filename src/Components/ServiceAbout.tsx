import { serviceItems } from "../data/MapItems";
import SectionIntro from "./reusables/SectionIntro";
import { usePageMotion } from "./reusables/usePageMotion";

const stats = [
  { value: "Frontend", label: "React, Next.js, TypeScript, motion systems" },
  { value: "Backend", label: "Node.js, APIs, auth, database-backed products" },
  { value: "Mobile", label: "Flutter delivery for product-heavy user flows" },
];

const ServiceAbout = () => {
  const scopeRef = usePageMotion<HTMLElement>();

  return (
    <section className="section shell" ref={scopeRef}>
      <SectionIntro
        label="Overview"
        title="I work across interface, logic, and the product decisions in between."
        copy="The work is strongest when design and engineering are not fighting each other. I build products with a clean frontend surface, a stable backend core, and enough restraint to keep the experience readable."
      />

      <div className="about-panel">
        <div className="about-panel__copy" data-animate="up">
          <p>
            My best work sits at the intersection of product thinking, visual
            judgment, and practical engineering. I care about how things look,
            but also how they scale, how teams maintain them, and how users move
            through them.
          </p>
          <p>
            That range lets me contribute beyond isolated tickets. I can help
            shape the system, implement the experience, and make the final thing
            feel more considered than the average portfolio build.
          </p>
        </div>

        <div className="about-panel__stats">
          {stats.map((item) => (
            <article className="stat-card" data-animate="up" key={item.value}>
              <span className="stat-card__value">{item.value}</span>
              <p className="stat-card__label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="service-grid">
        {serviceItems.map((item) => (
          <article className="service-card" data-animate="up" key={item.title}>
            <p className="service-card__caption">{item.caption}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceAbout;
