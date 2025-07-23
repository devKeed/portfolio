import { Stack, Typography, useTheme, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { serviceItems } from "../data/MapItems";

const Service = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 1000,
    height: 600,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getInitialPosition = (index: number) => {
    const cardWidth = 280;
    const cardHeight = 300;

    // Calculate center positions with some spread
    const cols = Math.min(3, serviceItems.length); // Max 3 columns or fewer if less items
    const rows = Math.ceil(serviceItems.length / cols);
    const col = index % cols;
    const row = Math.floor(index / cols);

    const centerX = (containerDimensions.width - cardWidth) / 2;
    const centerY = (containerDimensions.height - cardHeight) / 2;

    // Adjust spread based on container size
    const maxSpreadX = Math.min(
      320,
      (containerDimensions.width - cardWidth) / cols
    );
    const maxSpreadY = Math.min(
      200,
      (containerDimensions.height - cardHeight) / rows
    );

    const spreadX = (col - (cols - 1) / 2) * maxSpreadX; // Center columns
    const spreadY = (row - (rows - 1) / 2) * maxSpreadY; // Center rows

    return {
      x: Math.max(
        10,
        Math.min(centerX + spreadX, containerDimensions.width - cardWidth - 10)
      ),
      y: Math.max(
        10,
        Math.min(
          centerY + spreadY,
          containerDimensions.height - cardHeight - 10
        )
      ),
    };
  };

  return (
    <Stack className="topSpace innerWidth flexCenter">
      <Typography
        variant="h2"
        fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
      >
        What do I{" "}
        <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>
          do
        </span>
        ?
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "600px", sm: "700px", md: "800px" },
          overflow: "visible",
          mt: 3,
          // border: `2px dashed ${isDarkMode ? "#64CF5C40" : "#44AF3C40"}`,
          borderRadius: "12px",
          // backgroundColor: isDarkMode ? "#1a1a1a20" : "#f5f5f520",
        }}
      >
        {serviceItems.map((service, id) => {
          return (
            <motion.div
              key={id}
              drag
              dragConstraints={{
                left: 10,
                right: containerDimensions.width - 290, // container width - card width - padding
                top: 10,
                bottom: containerDimensions.height - 310, // container height - card height - padding
              }}
              dragElastic={0.05}
              dragTransition={{
                bounceStiffness: 800,
                bounceDamping: 15,
              }}
              whileDrag={{
                scale: 1.1,
                rotate: 2,
                zIndex: 10,
              }}
              whileHover={{ scale: 1.05 }}
              initial={getInitialPosition(id)}
              style={{
                position: "absolute",
                width: "280px",
                cursor: "grab",
                zIndex: 1,
              }}
              whileTap={{ cursor: "grabbing" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 400,
              }}
              onDragEnd={(_event, info) => {
                // Add a subtle bounce effect when hitting boundaries
                if (
                  Math.abs(info.velocity.x) > 500 ||
                  Math.abs(info.velocity.y) > 500
                ) {
                  // Small bounce animation when hitting walls with high velocity
                }
              }}
            >
              <Stack
                padding={2}
                spacing={2}
                className="flexStart dropBox pop-up"
                height={300}
                sx={{
                  background: isDarkMode ? "#2a2a2a" : "#fff",
                  color: isDarkMode ? "#fff" : "inherit",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  "&:hover": {
                    background: isDarkMode ? "#64CF5CFF" : "#44AF3CFF",
                    color: isDarkMode ? "#000" : "#fff",
                  },
                }}
              >
                {service.icon}
                <Typography variant="h3" fontSize="1.2rem">
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  textAlign="center"
                  fontSize="0.9rem"
                >
                  {service.description}
                </Typography>
              </Stack>
            </motion.div>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Service;
