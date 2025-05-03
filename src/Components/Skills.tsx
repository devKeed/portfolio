import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { skillItems } from "../data/skillsData";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const gridRef = useRef(null);
  const gridItemsRef = useRef<HTMLDivElement[]>([]);

  // Register our grid items to the ref array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {}, gridRef);

    // Clean up the context on unmount
    return () => ctx.revert();
  }, []);

  // Command key animation - rotate and scale items
  const handleCommandClick = () => {
    gsap.to(gridItemsRef.current, {
      rotation: () => Math.random() * 360,
      scale: () => 0.8 + Math.random() * 0.5,
      duration: 1,
      stagger: 0.05,
      ease: "elastic.out(1, 0.3)",
      onComplete: () => {
        gsap.to(gridItemsRef.current, {
          rotation: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.03,
          ease: "elastic.out(1, 0.3)",
        });
      },
    });
  };

  // Space key animation - float items up
  const handleSpaceClick = () => {
    gsap.to(gridItemsRef.current, {
      y: -20,
      duration: 0.5,
      stagger: 0.03,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(gridItemsRef.current, {
          y: 0,
          duration: 1,
          stagger: 0.03,
          ease: "bounce.out",
        });
      },
    });
  };

  // Option key animation - shuffle items
  const handleOptionClick = () => {
    gsap.to(gridItemsRef.current, {
      x: () => Math.random() * 40 - 20,
      y: () => Math.random() * 40 - 20,
      duration: 1,
      stagger: 0.02,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(gridItemsRef.current, {
          x: 0,
          y: 0,
          duration: 1,
          stagger: 0.02,
          ease: "back.out(1.7)",
        });
      },
    });
  };

  // Shift key animation - color pulse
  const handleShiftClick = () => {
    gsap.fromTo(
      gridItemsRef.current,
      {
        // boxShadow: "2px 2px rgba(143, 255, 134, 0)"
      },
      {
        boxShadow: "0 0 15px rgba(143, 255, 134, 0.8)",
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to(gridItemsRef.current, {
            // boxShadow: "2px 2px rgba(143, 255, 134, 0)",
            duration: 0.5,
          });
        },
      }
    );
  };

  return (
    <section id="skills" className="skills-section">
      <Stack className="topSpace innerWidth">
        <Typography
          variant="h2"
          fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
        >
          <span itemProp="name">Fortune Adebiyi's </span>Ski
          <span style={{ color: "#8fff86" }}>ll</span>s
        </Typography>
        <Typography variant="body1" itemProp="description">
          My primary stack includes React, MUI & Typescript. I have listed some
          of the languages/tools I have used or still use below; there are a lot
          more but these are the ones I deemed necessary to list.
        </Typography>
        <div ref={gridRef}>
          <Grid
            container
            mt={2}
            spacing={1}
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {skillItems.map((skill, id) => {
              return (
                <Grid
                  component="div"
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  key={id}
                  sx={{ flexGrow: 1 }}
                  itemProp="hasSkill"
                  itemScope
                  itemType="https://schema.org/DefinedTerm"
                >
                  <Stack
                    padding={1}
                    className="flexCenter dropBox pop-up"
                    ref={addToRefs}
                    sx={{
                      height: "100%",
                      background: isDarkMode ? "#2a2a2a" : "#fff",
                      color: isDarkMode ? "#fff" : "inherit",
                      transformOrigin: "center center",
                      "&:hover": {
                        background: `${skill.color}`,
                        color:
                          skill.color === "#ffffff" ||
                          skill.color.toLowerCase() === "#fff"
                            ? "#000"
                            : "inherit",
                      },
                    }}
                  >
                    <Stack
                      height={{ xs: 18, sm: 26, md: 32 }}
                      width={{ xs: 18, sm: 26, md: 32 }}
                    >
                      <img
                        height="100%"
                        width="100%"
                        src={skill.icon}
                        alt={`${skill.name} icon - Fortune Adebiyi skill`}
                        style={{
                          filter: isDarkMode
                            ? "brightness(0) invert(1)"
                            : "none",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </Stack>
                    <Typography
                      fontSize={{ xs: 11, sm: 14, md: 16 }}
                      itemProp="name"
                    >
                      {skill.name}
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
          <Box flexDirection="row" display="flex" gap={1}>
            <KeyBox
              text="command"
              icon="⌘"
              width="30"
              onClick={handleCommandClick}
            />
            <KeyBox
              text="space"
              icon="␣"
              width="45"
              onClick={handleSpaceClick}
            />
            <KeyBox
              text="option"
              icon="⌥"
              width="20"
              onClick={handleOptionClick}
            />
            <KeyBox
              text="shift"
              icon="⇧"
              width="25"
              onClick={handleShiftClick}
            />
          </Box>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Typography fontSize={{ xs: 9, sm: 12, md: 14 }} itemProp="name">
              Press any of the keys above to see some fun animations!
            </Typography>
          </div>
        </div>
      </Stack>
    </section>
  );
};

export default Skills;

export const KeyBox = (props: {
  text: string;
  icon?: string;
  width: string;
  onClick?: () => void;
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const keyRef = useRef(null);

  // Add press effect animation
  const handleClick = () => {
    if (props.onClick) {
      // Animate key press down and up
      gsap.to(keyRef.current, {
        y: 2,
        // boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        duration: 0.1,
        onComplete: () => {
          gsap.to(keyRef.current, {
            y: 0,
            // boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
            duration: 0.2,
            onComplete: props.onClick,
          });
        },
      });
    }
  };

  return (
    <Stack
      ref={keyRef}
      padding={1}
      className="flexCenter dropBox pop-up"
      onClick={handleClick}
      sx={{
        marginTop: 1,
        background: isDarkMode ? "#2a2a2a" : "#fff",
        color: isDarkMode ? "#fff" : "inherit",
        position: "relative",
        width: `${props.width}%`,
        cursor: "pointer",
        transition: "background 0.3s",
        "&:hover": {
          background: isDarkMode ? "#3a3a3a" : "#f0f0f0",
        },
        "&:active": {
          transform: "translateY(2px)",
        },
      }}
    >
      {props.icon && (
        <Typography
          sx={{
            position: "absolute",
            top: "2px",
            right: "5px",
            fontSize: { xs: 11, sm: 14, md: 16 },
            opacity: 0.7,
          }}
        >
          {props.icon}
        </Typography>
      )}
      <Typography mt={1} fontSize={{ xs: 11, sm: 14, md: 16 }}>
        {props.text}
      </Typography>
    </Stack>
  );
};
