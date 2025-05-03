import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
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
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="innerWidth">
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
              fontSize={{ xs: "2rem", sm: "2.5rem", lg: "3.1rem" }}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typewriter
                words={["Hey! I'm Fortune, Fullstack Software Engineer"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
            <Typography
              variant="body1"
              style={{ maxWidth: 700 }}
              mt={2}
              component={motion.p}
              variants={textVariants}
              sx={{ color: theme.palette.text.secondary }}
            >
              In my world, it's about merging technical expertise with aesthetics,
              ensuring every interaction is smooth and meaningful.
            </Typography>
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
                borderRadius:"50%", 
                borderRight: `5px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`, 
                borderBottom: `8px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`
              }}
              src="./images/fortune_image.webp"
              alt="Fortune's Image"
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
              variant="h2" 
              textAlign="center" 
              pb={4}  
              fontSize={{ xs: "2rem", sm: "2.5rem", lg: "3.1rem" }}
              sx={{ color: theme.palette.text.primary }}
            >
              <Typewriter
                words={["Hey! I'm Fortune, Fullstack Software Engineer"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
            <motion.div
              variants={imageVariants}
              style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            >
              <img
                height={200}
                className="float"
                src="./images/fortune_image.webp"
                style={{
                  borderRadius:"50%", 
                  borderRight: `5px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`, 
                  borderBottom: `8px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`
                }}
                alt="Fortune's Image"
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
              In my world, it's about merging technical expertise with aesthetics,
              ensuring every interaction is smooth and meaningful.
            </Typography>
          </Stack>
        </Stack>
      )}
    </div>
  );
};

export default Hero;
