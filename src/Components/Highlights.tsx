import { projectItems } from "../data/MapItems";
import MyButton from "./reusables/MyButton";
import SectionIntro from "./reusables/SectionIntro";
import { usePageMotion } from "./reusables/usePageMotion";

const featuredProjects = projectItems.filter((project) => project.featured).slice(0, 4);

const Highlight = () => {
  const scopeRef = usePageMotion<HTMLElement>();

  return (
    <section className="section shell shell--wide" ref={scopeRef}>
      <SectionIntro
        label="Selected Work"
        title="A few projects that show how I think, build, and ship."
        copy="The work below spans payments, learning, marketing, and creative tooling. Different products, same objective: make the experience clearer and the implementation stronger."
      />

      <div className="featured-work-list">
        {featuredProjects.map((project, index) => (
          <article className="featured-work" key={project.slug}>
            <div className="featured-work__meta" data-animate="up">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>

            <div className="featured-work__grid">
              <div className="featured-work__content" data-animate="up">
                <p className="featured-work__role">
                  {project.role} / {project.location}
                </p>
                <h3>{project.name}</h3>
                <p className="featured-work__summary">{project.summary}</p>

                <div className="pill-row">
                  {project.tech.map((tech) => (
                    <span className="skill-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="impact-list">
                  {project.scope.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <MyButton text={project.button} link={project.link} />
              </div>

              <a
                className="featured-work__media"
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                data-animate="image"
              >
                <img src={project.image} alt={project.name} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="section-actions" data-animate="up">
        <MyButton text="Browse all projects" link="/projects" />
      </div>
    </section>
  );
};

export default Highlight;
