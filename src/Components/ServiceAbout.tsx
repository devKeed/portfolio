import { Stack, Typography, useTheme, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Music } from "./Music";

const ServiceAbout = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Stack className="topSpace innerWidth flexCenter">
      <Typography
        variant="h2"
        fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
      >
        About{" "}
        <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>
          Me
        </span>
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          mt: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 400,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.02 }}
          style={{
            width: "100%",
            maxWidth: "700px",
            cursor: "default",
          }}
        >
          <Stack
            spacing={0}
            sx={{
              background: isDarkMode ? "#1e1e1e" : "#fafafa",
              color: isDarkMode ? "#d4d4d4" : "#2d2d30",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: `1px solid ${isDarkMode ? "#333" : "#e1e4e8"}`,
              overflow: "hidden",
              minHeight: "500px",
            }}
          >
            {/* Code Editor Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                background: isDarkMode ? "#2d2d30" : "#f6f8fa",
                borderBottom: `1px solid ${isDarkMode ? "#333" : "#e1e4e8"}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ffbd2e",
                  }}
                />
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#28ca42",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  ml: 3,
                  fontSize: "14px",
                  color: isDarkMode ? "#cccccc" : "#586069",
                  fontFamily: "'Monaco', 'Menlo', monospace",
                }}
              >
                about-me.js
              </Typography>
            </Box>

            {/* Code Editor Content */}
            <Box
              sx={{
                padding: "20px",
                fontFamily: "'Monaco', 'Menlo', 'Consolas', monospace",
                fontSize: "14px",
                lineHeight: 1.6,
                flex: 1,
                whiteSpace: "pre-wrap",
              }}
            >
              <Typography component="div" variant="body2" sx={{ color: "#6a9955" }}>
                // About me
              </Typography>
              <Typography component="div" variant="body2" sx={{ mt: 1 }}>
                <span style={{ color: isDarkMode ? "#569cd6" : "#0000ff" }}>
                  const
                </span>{" "}
                <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                  developer
                </span>{" "}
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  =
                </span>{" "}
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  {"{"}
                </span>
              </Typography>

              <Box sx={{ pl: 2, mt: 1 }}>
                <Typography component="div" variant="body2">
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    name:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "Fortune Adebiyi"
                  </span>
                  ,
                </Typography>
                <Typography component="div" variant="body2">
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    role:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "FullStack Software Engineer"
                  </span>
                  ,
                </Typography>
                <Typography component="div" variant="body2">
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    location:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "Nigeria 🇳🇬"
                  </span>
                  ,
                </Typography>

                <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    skills:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    {"{"}
                  </span>
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography component="div" variant="body2">
                    <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                      frontend:
                    </span>{" "}
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      [
                    </span>
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "React"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "TypeScript"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Next.js"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Material-UI"
                    </span>
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      ]
                    </span>
                    ,
                  </Typography>
                  <Typography component="div" variant="body2">
                    <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                      backend:
                    </span>{" "}
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      [
                    </span>
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Node.js"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Express"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "MongoDB"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Nest.js"
                    </span>
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      ]
                    </span>
                    ,
                  </Typography>
                  <Typography component="div" variant="body2">
                    <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                      Mobile:
                    </span>{" "}
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      [
                    </span>
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Flutter"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "React Native"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Figma"
                    </span>
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      ]
                    </span>
                    ,
                  </Typography>
                  <Typography component="div" variant="body2">
                    <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                      Tools:
                    </span>{" "}
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      [
                    </span>
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Git"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Figma"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Webflow"
                    </span>
                     ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Linux"
                    </span>
                    ,{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Blender"
                    </span>
                    <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                      ]
                    </span>
                    ,
                  </Typography>
                </Box>
                <Typography component="div" variant="body2">
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    {"}"}
                  </span>
                  ,
                </Typography>

                <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    passion:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "Building, Art and Music"
                  </span>
                  ,
                </Typography>

                <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    philosophy:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#dcdcaa" : "#795e26" }}>
                    () =&gt;
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    {"{"}
                  </span>
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <Typography component="div" variant="body2">
                    <span style={{ color: isDarkMode ? "#569cd6" : "#0000ff" }}>
                      return
                    </span>{" "}
                    <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                      "Clean code is not just about syntax,
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's
                      about creating solutions that are
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maintainable,
                      scalable, and delightful."
                    </span>
                    ;
                  </Typography>
                </Box>
                <Typography component="div" variant="body2">
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    {"}"}
                  </span>
                  ,
                </Typography>

                <Typography component="div" variant="body2" sx={{ mt: 2 }}>
                  <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                    currentlyLearning:
                  </span>{" "}
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    [
                  </span>
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "AI/ML"
                  </span>
                  ,{" "}
                  <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                    "Cloud Architecture"
                  </span>
                  <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                    ]
                  </span>
                </Typography>
              </Box>

              <Typography component="div" variant="body2" sx={{ mt: 1 }}>
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  {"}"}
                </span>
                ;
              </Typography>

              <Typography component="div" variant="body2" sx={{ mt: 3, color: "#6a9955" }}>
                // Let's build something amazing together!
              </Typography>
              <Typography component="div" variant="body2" sx={{ mt: 1 }}>
                <span style={{ color: isDarkMode ? "#9cdcfe" : "#0070c1" }}>
                  console
                </span>
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  .
                </span>
                <span style={{ color: isDarkMode ? "#dcdcaa" : "#795e26" }}>
                  log
                </span>
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  (
                </span>
                <span style={{ color: isDarkMode ? "#ce9178" : "#a31515" }}>
                  "Welcome to my portfolio!"
                </span>
                <span style={{ color: isDarkMode ? "#d4d4d4" : "#2d2d30" }}>
                  )
                </span>
                ;
              </Typography>
            </Box>
          </Stack>
        </motion.div>
      </Box>
      <Music />
    </Stack>
  );
};

export default ServiceAbout;
