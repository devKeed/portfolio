import { Box, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyButton from "./reusables/MyButton";
import MainBar from "./MainBar";
import { BackgroundMarquee } from "./BackgroundMarquee";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const theme = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (verticalLineRef.current && shineRef.current) {
      // Set initial state and animate the vertical line growing
      gsap.set(verticalLineRef.current, { height: "100px", opacity: 1 });

      gsap.fromTo(
        verticalLineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 1, // Add delay to show after other elements
        }
      );

      // Animate the shine effect continuously
      gsap.fromTo(
        shineRef.current,
        { y: "-100%", opacity: 0 },
        {
          y: "200%",
          opacity: 1,
          duration: 3,
          ease: "power2.inOut",
          repeat: -1,
          delay: 2, // Start after line animation
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      <BackgroundMarquee />

      <MainBar />
      <div
        className="innerWidth"
        id="about"
        style={{
          minHeight: "135vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          gap={5}
          className="flexCenter"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack
            spacing={1}
            sx={{ display: "flex", alignItems: "center" }}
            component={motion.div}
            variants={textVariants}
          >
            <Typography
              variant="h1"
              fontSize={{ xs: "2rem", sm: "2.5rem", lg: "6rem" }}
              textAlign="center"
              sx={{ color: theme.palette.text.primary }}
            >
              Fortune Adebiyi
            </Typography>
            <Typography
              variant="h1"
              fontSize={{ xs: "2rem", sm: "2.5rem", lg: "6rem" }}
              textAlign="center"
              sx={{ color: theme.palette.text.primary }}
            >
              Software Engineer
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              style={{ maxWidth: 450 }}
              pt={2}
              component={motion.p}
              variants={textVariants}
              sx={{ color: theme.palette.text.secondary }}
            >
              A Fullstack Software Engineer. In my world, it's about merging
              scalable systems with aesthetics
            </Typography>
            <Box pt={2}>
              <MyButton
                text="Download CV"
                link="https://docs.google.com/document/d/1G1YqBPGk9_DCQHc5rBF_dkiBu_fn15KGLiklEJ7hf_I/export?format=pdf"
              />
            </Box>
          </Stack>

          {/* Vertical line with shine effect */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 2,
            }}
          >
            <Box
              ref={verticalLineRef}
              sx={{
                width: "3px", // Made slightly wider
                height: "100px",
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  ${
                    theme.palette.mode === "dark" ? "#64CF5CFF" : "#44AF3CFF"
                  } 30%, 
                  ${theme.palette.mode === "dark" ? "#ffffff" : "#333333"} 50%, 
                  ${
                    theme.palette.mode === "dark" ? "#64CF5CFF" : "#44AF3CFF"
                  } 70%, 
                  transparent 100%)`,
                position: "relative",
                overflow: "hidden",
                borderRadius: "2px",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 0 20px rgba(100, 207, 92, 0.4)"
                    : "0 0 20px rgba(68, 175, 60, 0.4)",
                opacity: 1, // Ensure it's visible
              }}
            >
              {/* Shine effect */}
              <Box
                ref={shineRef}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "30px",
                  background: `linear-gradient(180deg, 
                    transparent 0%, 
                    ${
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.9)"
                        : "rgba(255, 255, 255, 1)"
                    } 50%, 
                    transparent 100%)`,
                  filter: "blur(2px)",
                  borderRadius: "2px",
                }}
              />
            </Box>
          </Box>

          <motion.div
            variants={imageVariants}
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              component="img"
              className="float"
              src="./images/fortune_image.webp"
              sx={{
                opacity: imageLoaded ? 1 : 0.8,
                transition: "opacity 0.3s ease",
                width: "100%",
                height: "auto",
                maxWidth: { xs: "280px", sm: "330px", lg: "400px" },
              }}
              alt="Portrait of Fortune Adebiyi, Fullstack Software Engineer"
              loading="eager"
              fetchPriority="high"
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </Stack>
      </div>
    </div>
  );
};

export default Hero;
