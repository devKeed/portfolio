import { Stack, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MainBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.05, 
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1, 
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "My projects", href: "#projects" },
    // { label: "Blog", href: "" },
    { label: "Contact me", href: "#contact" }
  ];

  return (
    <div style={{ borderBottom: "1.5px solid #000" }}>
      {!isMobile && (
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row", margin: "auto" },
          }}
          spacing={2}
          className="flexBetween innerWidth"
        >
          <a href="/">
            <img src="images\fortune_logo.webp" height={30} alt="" />
          </a>
          <Stack direction="row" spacing={4}>
            {menuItems.map((item, index) => (
              item.href && (
                <a key={index} href={item.href}>
                  <Typography fontWeight="bold">{item.label}</Typography>
                </a>
              )
            ))}
          </Stack>
        </Stack>
      )}

      {isMobile && (
        <>
          <Stack 
            direction="row" 
            className="innerWidth flexBetween"
            sx={{ 
              padding: "10px 0",
              position: "relative",
              zIndex: 100
            }}
          >
            <a href="/">
              <img src="images\fortune_logo.webp" height={30} alt="" />
            </a>
            <IconButton
              onClick={toggleMenu}
              sx={{
                transition: 'transform 0.3s ease',
                transform: openMenu ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: openMenu ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openMenu ? <CloseIcon /> : <MenuIcon />}
              </motion.div>
            </IconButton>
          </Stack>

          <AnimatePresence>
            {openMenu && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                style={{
                  overflow: "hidden",
                  background: "#fff",
                  borderTop: "1.5px solid #000",
                }}
              >
                <Stack 
                  spacing={3} 
                  sx={{ 
                    padding: "20px 0 40px",
                    width: "100%"
                  }}
                >
                  {menuItems.map((item, index) => (
                    item.href && (
                      <motion.div
                        key={index}
                        variants={menuItemVariants}
                        onClick={() => setOpenMenu(false)}
                      >
                        <a 
                          href={item.href}
                          style={{ 
                            display: "block", 
                            textAlign: "center",
                            padding: "10px 0"
                          }}
                        >
                          <Typography 
                            fontWeight="bold" 
                            variant="h5"
                            sx={{ 
                              position: "relative",
                              "&::after": {
                                content: '""',
                                position: "absolute",
                                width: "0%",
                                height: "2px",
                                bottom: "-5px",
                                left: "50%",
                                backgroundColor: "#000",
                                transition: "all 0.3s ease",
                                transform: "translateX(-50%)"
                              },
                              "&:hover::after": {
                                width: "40%"
                              }
                            }}
                          >
                            {item.label}
                          </Typography>
                        </a>
                      </motion.div>
                    )
                  ))}
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default MainBar;
