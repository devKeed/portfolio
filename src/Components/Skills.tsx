import SectionIntro from "./reusables/SectionIntro";
import { usePageMotion } from "./reusables/usePageMotion";

const stackGroups = [
  {
    title: "Frontend",
    text: "Design systems, motion, responsive composition, and component architecture.",
    items: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    text: "Services, APIs, database-backed products, and operational product logic.",
    items: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Mobile",
    text: "Cross-platform product delivery with strong attention to user flow and edge cases.",
    items: ["Flutter", "React Native", "TypeScript", "REST APIs"],
  },
  {
    title: "Workflow",
    text: "Tools and practices I use to ship, refine, and collaborate at pace.",
    items: ["GitHub", "Docker", "Figma", "Product QA", "Systems Thinking"],
  },
];

const Skills = () => {
  const scopeRef = usePageMotion<HTMLElement>();

  return (
    <section className="section shell" ref={scopeRef}>
      <SectionIntro
        label="Capabilities"
        title="A stack that covers product delivery, not just interface implementation."
        copy="I move comfortably between polished frontend work and the harder structural concerns underneath it. That range makes it easier to ship products that are both usable and durable."
      />

      <div className="stack-groups">
        {stackGroups.map((group) => (
          <article className="stack-group" data-animate="up" key={group.title}>
            <div className="stack-group__header">
              <h3>{group.title}</h3>
              <p>{group.text}</p>
            </div>
            <div className="pill-row">
              {group.items.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
