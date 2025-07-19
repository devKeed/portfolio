import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import MyButton from "./reusables/MyButton";
import MainBar from "./MainBar";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div style={{ minHeight: "100vh" }}>
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
        {!isMobile && (
          <Stack
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView={{ opacity: 1, x: 0 }}
            direction="row"
            gap={{ xs: 2, lg: 10 }}
            className="flexBetween topSpace"
          >
            <Stack
              spacing={1}
              sx={{ display: "flex", alignItems: "start" }}
              component={motion.div}
              variants={textVariants}
            >
              <Typography
                variant="h1"
                fontSize={{ xs: "2rem", sm: "2.5rem", lg: "5rem" }}
                sx={{ color: theme.palette.text.primary }}
              >
                Hello! I'm
              </Typography>
              <Typography
                variant="h1"
                fontSize={{ xs: "2rem", sm: "2.5rem", lg: "5rem" }}
                sx={{ color: theme.palette.text.primary }}
              >
                Fortune Adebiyi
              </Typography>
              <Typography
                variant="body1"
                style={{ maxWidth: 500 }}
                mt={2}
                pb={3}
                component={motion.p}
                variants={textVariants}
                sx={{ color: theme.palette.text.secondary }}
              >
                A Fullstack Software Engineer. In my world, it's about merging
                scalable systems with aesthetics
              </Typography>
              <Box>
                <MyButton text="Download CV" />
              </Box>
            </Stack>
            <Stack
              height={{ md: 310, lg: 370 }}
              component={motion.div}
              variants={imageVariants}
              style={{}}
            >
              <img
                className="float"
                height="100%"
                style={{
                  marginLeft: "auto",
                  borderRadius: "50%",
                  borderRight: `5px solid ${
                    theme.palette.mode === "dark" ? "#fff" : "#000"
                  }`,
                  borderBottom: `8px solid ${
                    theme.palette.mode === "dark" ? "#fff" : "#000"
                  }`,
                }}
                src="./images/fortune_image.webp"
                alt="Portrait of Fortune Adebiyi, Fullstack Software Engineer"
              />
            </Stack>
          </Stack>
        )}
        {isMobile && (
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
                fontSize={{ xs: "2rem", sm: "2.5rem", lg: "5rem" }}
                textAlign="center"
                sx={{ color: theme.palette.text.primary }}
              >
                Hello! I'm
              </Typography>
              <Typography
                variant="h1"
                fontSize={{ xs: "2rem", sm: "2.5rem", lg: "5rem" }}
                textAlign="center"
                sx={{ color: theme.palette.text.primary }}
              >
                Fortune Adebiyi
              </Typography>
              <motion.div
                variants={imageVariants}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  height={200}
                  className="float"
                  src="./images/fortune_image.webp"
                  style={{
                    borderRadius: "50%",
                  }}
                  alt="Portrait of Fortune Adebiyi, Fullstack Software Engineer"
                />
              </motion.div>
              <Typography
                variant="body1"
                textAlign="center"
                style={{ maxWidth: 700 }}
                mt={2}
                component={motion.p}
                variants={textVariants}
                sx={{ color: theme.palette.text.secondary }}
              >
                A Fullstack Software Engineer. In my world, it's about merging
                scalable systems with aesthetics
              </Typography>
            </Stack>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Hero;
