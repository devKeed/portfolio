import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import MyButton from "./reusables/MyButton";
import MainBar from "./MainBar";
import { BackgroundMarquee } from "./BackgroundMarquee";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [imageLoaded, setImageLoaded] = useState(false);

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
          minHeight: "85vh",
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
              <MyButton text="Download CV" />
            </Box>
          </Stack>

             {/* <motion.div
              variants={imageVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                height={200}
                width={200}
                className="float"
                src="./images/fortune_image.webp"
                style={{
                  opacity: imageLoaded ? 1 : 0.8,
                  transition: "opacity 0.3s ease",
                }}
                alt="Portrait of Fortune Adebiyi, Fullstack Software Engineer"
                loading="eager"
                fetchPriority="high"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div> */}
        </Stack>
      </div>
    </div>
  );
};

export default Hero;
