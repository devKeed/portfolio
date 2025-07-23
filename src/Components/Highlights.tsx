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
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectItems } from "../data/MapItems";
import MyButton from "./reusables/MyButton";
import { BackgroundMarquee } from "./BackgroundMarquee";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Highlight = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
        <BackgroundMarquee text={item.name} />
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
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "3rem" },
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              {item.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                marginBottom: 3,
                opacity: 0.9,
                lineHeight: 1.6,
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
                    padding: "5px 10px",
                    fontSize: { xs: "0.6rem", md: "0.7rem" },
                    background: chipBackground,
                    border: chipBorder,
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
            height: "70vh",
            position: "relative",
            willChange: "transform",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
          {projectItems.slice(0, 3).map((item, index) => (
            <FullScreenProject key={index} item={item} index={index} />
          ))}
        </Box>
      )}

      {/* Mobile Projects */}
      {isMobile && (
        <Stack spacing={4} sx={{ padding: 2 }}>
          {projectItems.slice(0, 3).map((project, id) => (
            <Stack key={id} spacing={2}>
              <Box
                sx={{
                  background: projectBoxBackground,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  position: "relative",
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
                  

                <Box sx={{ padding: 3, position: "relative" }}>
                     <BackgroundMarquee text={project.name} />
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
                            padding: "3px 8px",
                            fontSize: "0.8rem",
                            background: chipBackground,
                            border: chipBorder,
                          }}
                        >
                          {tool}
                        </Typography>
                      )
                    )}
                  </Stack>

                 <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <MyButton link={project.link} text={project.button} />
            </motion.div>
                </Box>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}

      {/* View More Projects Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: 4, md: 8 },
          marginBottom: { xs: 2, md: 4 },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/projects")}
            sx={{
              padding: { xs: "12px 24px", md: "16px 32px" },
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: "600",
              borderColor: highlightColor,
              color: highlightColor,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: highlightColor,
                backgroundColor: `${highlightColor}20`,
                transform: "translateY(-2px)",
                boxShadow: `0 8px 25px ${highlightColor}40`,
              },
            }}
          >
            View More Projects
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Highlight;
