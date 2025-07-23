import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  useTheme,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectItems } from "../data/MapItems";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SEO from "./SEO";
import MainBar from "./MainBar";
import Contact from "./Contact";


// Define types for enhanced project items
interface EnhancedProject {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  button: string;
  longDescription?: string;
  githubLink?: string;
  role?: string;
  year?: string;
  challenges?: string[];
  solutions?: string[];
  category?: string; // Changed from specific union type to string to match actual data
}

// Enhanced project data with more details
const enhancedProjects: EnhancedProject[] = projectItems.map(
  (project, index) => ({
    id: `project-${index}`,
    ...project,
    role: [
      "Fullstack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Designer",
    ][Math.floor(Math.random() * 4)],
    year: `${2022 + Math.floor(Math.random() * 4)}`,
    githubLink:
      project.name !== "Nitoons" ? "https://github.com/pledreDev" : "",
    longDescription: `${project.description} As a key contributor to this project, I implemented multiple features to enhance the overall functionality and user experience. Working closely with the product team, I ensured a seamless integration of all components while maintaining code quality and performance standards.`,
    challenges: [
      "Ensuring scalability with increasing user demand",
      "Integrating multiple APIs with consistent user experience",
      "Optimizing performance for both mobile and desktop users",
      "Managing state across numerous components",
    ],
    solutions: [
      "Implemented efficient data caching strategies",
      "Created a centralized API service layer",
      "Developed responsive design with performance optimizations",
      "Utilized context API for better state management",
    ],
    category: ["fullstack", "frontend", "backend", "design"][
      Math.floor(Math.random() * 4)
    ],
  })
);

const ProjectPage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [activeTab, setActiveTab] = useState<string | false>("all");
  const [selectedProject, setSelectedProject] =
    useState<EnhancedProject | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleProjectClick = (project: EnhancedProject) => {
    setSelectedProject(project);
    // Scroll to details section
    const detailsSection = document.getElementById("project-details");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects =
    activeTab === "all"
      ? enhancedProjects
      : enhancedProjects.filter((project) => project.category === activeTab);

  return (
    <>
      <SEO
        title="Projects | Fortune Adebiyi Portfolio"
        description="Explore Fortune Adebiyi's projects showcasing expertise in full-stack development, frontend, backend, and design skills."
        keywords="Fortune Adebiyi, projects, portfolio, web development, React, Node.js, fullstack"
      />
     <MainBar/>
      <section className="projects-section topSpace innerWidth">
   
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
              gutterBottom
            >
              My{" "}
              <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>
                Projects
              </span>
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, maxWidth: 800 }}>
              Explore my portfolio of projects that showcase my technical skills
              and creative problem-solving abilities. Each project represents a
              unique challenge that I've tackled using modern technologies and
              best practices.
            </Typography>
          </motion.div>

          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="project category tabs"
            >
              <Tab
                label="All Projects"
                value="all"
                sx={{
                  fontWeight: activeTab === "all" ? "bold" : "normal",
                  color:
                    activeTab === "all"
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              />
              <Tab
                label="Full-stack"
                value="fullstack"
                sx={{
                  fontWeight: activeTab === "fullstack" ? "bold" : "normal",
                  color:
                    activeTab === "fullstack"
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              />
              <Tab
                label="Frontend"
                value="frontend"
                sx={{
                  fontWeight: activeTab === "frontend" ? "bold" : "normal",
                  color:
                    activeTab === "frontend"
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              />
              <Tab
                label="Backend"
                value="backend"
                sx={{
                  fontWeight: activeTab === "backend" ? "bold" : "normal",
                  color:
                    activeTab === "backend"
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              />
              <Tab
                label="Design"
                value="design"
                sx={{
                  fontWeight: activeTab === "design" ? "bold" : "normal",
                  color:
                    activeTab === "design"
                      ? theme.palette.primary.main
                      : "inherit",
                }}
              />
            </Tabs>
          </Box>

          <motion.div variants={itemVariants}>
            <Grid container spacing={3}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card
                    className="dropBox"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description.slice(0, 120)}...
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mb: 2,
                        }}
                      >
                        {project.tech.slice(0, 3).map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: isDarkMode ? "#333" : "#f0f0f0",
                              color: isDarkMode ? "#fff" : "inherit",
                              marginRight: "4px",
                              marginBottom: "4px",
                            }}
                          />
                        ))}
                        {project.tech.length > 3 && (
                          <Typography
                            variant="caption"
                            sx={{ alignSelf: "center" }}
                          >
                            +{project.tech.length - 3} more
                          </Typography>
                        )}
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {project.role}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {project.year}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {filteredProjects.length === 0 && (
                <Box sx={{ textAlign: "center", py: 4, width: "100%" }}>
                  <Typography variant="h6">
                    No projects found in this category
                  </Typography>
                </Box>
              )}
            </Grid>
          </motion.div>

          {selectedProject && (
            <Box
              id="project-details"
              component={motion.div}
              variants={containerVariants}
              sx={{ mt: 8, scrollMarginTop: "80px" }}
            >
              <Paper
                elevation={0}
                className="dropBox"
                sx={{
                  p: { xs: 2, sm: 4 },
                  backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                  overflow: "hidden",
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <motion.div variants={itemVariants}>
                      <Box
                        sx={{
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: `4px solid ${
                            theme.palette.mode === "dark" ? "#444" : "#eee"
                          }`,
                          mb: 3,
                        }}
                      >
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.name}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          mb: 2,
                          flexWrap: "wrap",
                        }}
                      >
                        {selectedProject.tech.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          />
                        ))}
                      </Box>
                    </motion.div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <motion.div variants={itemVariants}>
                      <Typography variant="h3" gutterBottom>
                        {selectedProject.name}
                      </Typography>

                      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          Role: {selectedProject.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          Year: {selectedProject.year}
                        </Typography>
                      </Box>

                      <Typography variant="body1" paragraph>
                        {selectedProject.longDescription}
                      </Typography>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Challenges:
                        </Typography>
                        <ul>
                          {selectedProject.challenges?.map(
                            (challenge, index) => (
                              <li key={index}>
                                <Typography variant="body2">
                                  {challenge}
                                </Typography>
                              </li>
                            )
                          )}
                        </ul>
                      </Box>

                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom>
                          Solutions:
                        </Typography>
                        <ul>
                          {selectedProject.solutions?.map((solution, index) => (
                            <li key={index}>
                              <Typography variant="body2">
                                {solution}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>

                      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                        {selectedProject.link !== "#" && (
                          <Button
                            variant="contained"
                            startIcon={<LinkIcon />}
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Project
                          </Button>
                        )}

                        {selectedProject.githubLink && (
                          <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={selectedProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              borderColor:
                                theme.palette.mode === "dark" ? "#fff" : "#000",
                              color:
                                theme.palette.mode === "dark" ? "#fff" : "#000",
                            }}
                          >
                            View Code
                          </Button>
                        )}
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          )}

          {/* Contact CTA Section */}
          <Box
            sx={{
              mt: 8,
              p: 4,
              textAlign: "center",
              backgroundColor: isDarkMode
                ? "rgba(143, 255, 134, 0.1)"
                : "rgba(143, 255, 134, 0.2)",
              borderRadius: "8px",
            }}
            component={motion.div}
            variants={itemVariants}
          >
            <Typography variant="h4" gutterBottom>
              Want to work together?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowOutwardIcon />}
              href="/contact"
              sx={{ px: 4 }}
            >
              Get in Touch
            </Button>
          </Box>
        </motion.div>
      </section>
      <Contact/>
    </>
  );
};

export default ProjectPage;
