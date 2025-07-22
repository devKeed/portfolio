import { Stack, Typography } from "@mui/material";
import { Spotify } from "react-spotify-embed";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { motion } from "framer-motion";

export const Music = () => {
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
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <Stack
      direction="row"
      gap={10}
      className="innerWidth topSpace"
      sx={{ display: "flex", justifyContent: "center" }}
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Stack sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack
          spacing={1}
          sx={{ textAlign: "center" }}
          component={motion.div}
          variants={textVariants}
        >
          <Spotify
            wide
            width="100%"
            height={460}
            link="https://open.spotify.com/playlist/641VXxv32Yu44wKVVoDxZk?si=ae67597d17f84c25"
          />
        
        </Stack>
      </Stack>
    </Stack>
  );
};
