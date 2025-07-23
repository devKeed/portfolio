import HomePage from "./Components/HomePage";
import SEO from "./Components/SEO";

export default function Root() {
  return (
    <>
      <SEO 
        title="Fortune Adebiyi | Portfolio"
        description="Fortune Adebiyi's professional portfolio showcasing expertise in design, development, and creative projects."
        keywords="Fortune Adebiyi, web developer, designer, portfolio, projects, skills"
      />
      <HomePage />
    </>
  );
}
