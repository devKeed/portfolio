import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const theme = useTheme();
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show logo for 2 seconds, then transition to text
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      setShowText(true);
    }, 2000);

    // Complete loading after text animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            {showLogo && (
              <motion.div
                key="logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 1.1,
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.img
                  src="/images/fa.svg"
                  alt="Fortune Adebiyi Logo"
                  style={{
                    width: "100px",
                    height: "100px",
                    filter:
                      theme.palette.mode === "dark"
                        ? "brightness(0) invert(1)"
                        : "none",
                  }}
                  animate={{
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.02, 0.98, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}

            {showText && (
              <motion.div
                key="text"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1,
                }}
              >
                <Typography
                  variant="body1"
                  fontFamily="PPValve-Medium"
                  textAlign="center"
                  fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
                  style={{ maxWidth: 700 }}
                  component={motion.p}
                  sx={{ color: theme.palette.text.secondary }}
                  initial={{ letterSpacing: "2px" }}
                  animate={{ letterSpacing: "normal" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <motion.span
                    itemProp="name"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    Fortune
                  </motion.span>
                  <motion.span
                    style={{ color: theme.palette.primary.main }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  >
                    {`{Adebiyi}`}
                  </motion.span>
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "10%",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
