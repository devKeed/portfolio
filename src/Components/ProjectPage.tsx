import { useState } from "react";
import SEO from "./SEO";
import PageHeader from "./reusables/PageHeader";
import MyButton from "./reusables/MyButton";
import { usePageMotion } from "./reusables/usePageMotion";
import { projectItems } from "../data/MapItems";

const categories = ["all", ...new Set(projectItems.map((project) => project.category))];

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const scopeRef = usePageMotion<HTMLDivElement>();

  const filteredProjects =
    activeCategory === "all"
      ? projectItems
      : projectItems.filter((project) => project.category === activeCategory);

  return (
    <>
      <SEO
        title="Projects | Fortune Adebiyi"
        description="Selected product, platform, and website work by Fortune Adebiyi."
        keywords="Fortune Adebiyi, projects, portfolio, product engineering, frontend, backend"
      />

      <div className="page-shell" ref={scopeRef}>
        <PageHeader
          label="Projects"
          title="Selected builds across product, platform, and web experience."
          description="A cross-section of work spanning fintech, learning, creative tooling, and marketing websites. The emphasis is always the same: clearer user flows, stronger implementation, and cleaner presentation."
          aside="The filters are there to organize the work, not turn it into a gallery gimmick."
        />

        <section className="section shell shell--wide">
          <div className="filter-row" data-animate="up">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip${activeCategory === category ? " is-active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
          </div>

          <div className="project-catalog">
            {filteredProjects.map((project) => (
              <article className="project-card" data-animate="up" key={project.slug}>
                <div className="project-card__intro">
                  <p className="eyebrow">
                    {project.year} / {project.category}
                  </p>
                  <p className="project-card__role">
                    {project.role} / {project.location}
                  </p>
                </div>

                <a
                  className="project-card__media"
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  <img src={project.image} alt={project.name} />
                </a>

                <div className="project-card__body">
                  <div className="project-card__heading">
                    <h2>{project.name}</h2>
                    <p>{project.summary}</p>
                  </div>

                  <p className="project-card__description">{project.description}</p>

                  <div className="pill-row">
                    {project.tech.map((tech) => (
                      <span className="skill-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__details">
                    <div>
                      <p className="project-card__subheading">Scope</p>
                      <ul className="impact-list impact-list--compact">
                        {project.scope.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="project-card__subheading">Impact</p>
                      <ul className="impact-list impact-list--compact">
                        {project.impact.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <MyButton text={project.button} link={project.link} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectPage;
