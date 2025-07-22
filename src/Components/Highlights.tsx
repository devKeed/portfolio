import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { Key, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectItems } from "../data/MapItems";
import MyButton from "./reusables/MyButton";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Theme-aware colors
  const highlightColor =
    theme.palette.mode === "dark" ? "#64CF5CFF" : "#44AF3CFF";
  const chipBackground =
    theme.palette.mode === "dark" ? theme.palette.grey[800] : "#dddddd";
  const chipBorder =
    theme.palette.mode === "dark"
      ? `1px solid ${theme.palette.grey[600]}`
      : "1px solid #000";
  const projectBoxBackground =
    theme.palette.mode === "dark" ? theme.palette.background.paper : "#fff";

  useEffect(() => {
    if (!isMobile) {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      projectItems.forEach((_, index) => {
        const project = projectRefs.current[index];
        const image = imageRefs.current[index];
        const text = textRefs.current[index];

        if (project && image && text) {
          // Create strong parallax effect for image and text moving in opposite directions
          // Image moves down as you scroll (slower than scroll)
          gsap.fromTo(
            image,
            { y: -200 },
            {
              y: 200,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: 2, // Slower, more dramatic effect
              },
            }
          );

          // Text moves up as you scroll (opposite direction to image)
          gsap.fromTo(
            text,
            { y: 150 },
            {
              y: -150,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5, // Slightly faster than image for contrast
              },
            }
          );

          // Scale and rotation effect on image for added depth
          gsap.fromTo(
            image.querySelector("img"),
            { scale: 1.2, rotation: 2 },
            {
              scale: 0.9,
              rotation: -2,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );

          // Additional fade effect based on scroll position
          gsap.fromTo(
            image,
            { opacity: 0.7 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top center",
                end: "center center",
                scrub: 1,
              },
            }
          );

          gsap.fromTo(
            text,
            { opacity: 0.8 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: project,
                start: "top center",
                end: "center center",
                scrub: 1,
              },
            }
          );

          // Add horizontal parallax for alternating sides
          if (index % 2 === 1) {
            // For right-side projects, add subtle horizontal movement
            gsap.fromTo(
              image,
              { x: 50 },
              {
                x: -50,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );

            gsap.fromTo(
              text,
              { x: -30 },
              {
                x: 30,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
              }
            );
          } else {
            // For left-side projects, opposite horizontal movement
            gsap.fromTo(
              image,
              { x: -50 },
              {
                x: 50,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            );

            gsap.fromTo(
              text,
              { x: 30 },
              {
                x: -30,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.5,
                },
              }
            );
          }
        }
      });

      // Refresh ScrollTrigger after all animations are set
      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  const FullScreenProject = ({ item, index }: { item: any; index: number }) => (
    <Box
      ref={(el: HTMLDivElement | null) => {
        projectRefs.current[index] = el;
      }}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${theme.palette.background.default}00, ${theme.palette.background.paper}40)`,
        // Add perspective for 3D effects
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "1400px",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, md: 4, lg: 8 },
          flexDirection: index % 2 === 1 ? "row-reverse" : "row",
        }}
      >
        {/* Text Section */}
        <Box
          ref={(el: HTMLDivElement | null) => {
            textRefs.current[index] = el;
          }}
          sx={{
            flex: 1,
            maxWidth: "500px",
            padding: { xs: 2, md: 4 },
            zIndex: 2,
            // Add some initial transform for parallax
            transform: "translateZ(50px)",
            willChange: "transform",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 1 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                fontWeight: "bold",
                marginBottom: 2,
                background: `linear-gradient(45deg, ${highlightColor}, ${theme.palette.primary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.name}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                marginBottom: 3,
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              {item.description}
            </Typography>

            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: 3,
                gap: 1,
              }}
            >
              {item.tech.map((tool: string, id: number) => (
                <Typography
                  key={id}
                  sx={{
                    padding: "8px 16px",
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    background: chipBackground,
                    border: chipBorder,
                    borderRadius: "20px",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {tool}
                </Typography>
              ))}
            </Stack>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <MyButton link={item.link} text={item.button} />
           
            </motion.div>
          </motion.div>
        </Box>

        {/* Image Section */}
        <Box
          ref={(el: HTMLDivElement | null) => {
            imageRefs.current[index] = el;
          }}
          sx={{
            flex: 1,
            maxWidth: "600px",
            height: "70vh",
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
            // Add initial transform for parallax
            transform: "translateZ(0px)",
            willChange: "transform",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(45deg, ${highlightColor}20, transparent)`,
              zIndex: 1,
              borderRadius: "20px",
            },
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );

  return (
    <Box sx={{ width: "100%" }}>
      {/* Header Section */}
      <Stack
        className="topSpace innerWidth"
        id="projects"
        sx={{
          paddingY: { xs: 4, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" },
            marginBottom: 2,
          }}
        >
          Projects <span style={{ color: highlightColor }}>Highlight</span>
        </Typography>
      </Stack>

      {/* Desktop Full-Screen Projects */}
      {!isMobile && (
        <Box>
          {projectItems.map((item, index) => (
            <FullScreenProject key={index} item={item} index={index} />
          ))}
        </Box>
      )}

      {/* Mobile Projects */}
      {isMobile && (
        <Stack spacing={4} sx={{ padding: 2 }}>
          {projectItems.map((project, id) => (
            <Stack key={id} spacing={2}>
              <Box
                sx={{
                  background: projectBoxBackground,
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ height: "250px", overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Box>

                <Box sx={{ padding: 3 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ marginBottom: 2 }}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: 2, opacity: 0.8 }}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: 3,
                      gap: 1,
                    }}
                  >
                    {project.tech.map(
                      (tool: any, id: Key | null | undefined) => (
                        <Typography
                          key={id}
                          sx={{
                            padding: "4px 12px",
                            fontSize: "0.8rem",
                            background: chipBackground,
                            border: chipBorder,
                            borderRadius: "15px",
                          }}
                        >
                          {tool}
                        </Typography>
                      )
                    )}
                  </Stack>

                  <Button
                    variant="contained"
                    href={project.link}
                    fullWidth
                    sx={{
                      padding: "12px",
                      borderRadius: "10px",
                      background: `linear-gradient(45deg, ${highlightColor}, ${theme.palette.primary.main})`,
                    }}
                  >
                    {project.button} 
                  </Button>
                </Box>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Highlight;
