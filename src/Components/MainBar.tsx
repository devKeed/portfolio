import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Switch,
  styled,
} from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeContext } from "./ColorMode";
import { Link } from "react-router-dom";
import HamburgerMenu from "./reusables/HamburgerMenu";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
    backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#000000",
    border: `1px solid ${
      theme.palette.mode === "dark" ? "#ffffff" : "#cccccc"
    }`,
    transition: theme.transitions.create(["background-color", "transform"], {
      duration: 300,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 300,
    }),
  },
}));

const MainBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && openMenu) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [openMenu]);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMenu]);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 30, scale: 0.9 },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    {
      label: "Home",
      href: "/",
      ariaLabel: "Navigate to Fortune Adebiyi's homepage",
    },
    {
      label: "Projects",
      href: "/projects",
      ariaLabel: "View Fortune Adebiyi's projects in detail",
    },
    {
      label: "Blog",
      href: "/blog",
      ariaLabel: "Read Fortune Adebiyi's blog posts",
    },
    {
      label: "Contact",
      href: "/contact",
      ariaLabel: "Contact Fortune Adebiyi",
    },
  ];

  return (
    <header
      style={{
        borderBottom: "1px solid",
        borderColor: theme.palette.mode === "dark" ? "#666" : "#000",
        color: theme.palette.text.primary,
        maxWidth: "1400px",
        margin: "auto",
      }}
    >
      <Stack
        direction="row"
        className="innerWidth flexBetween"
        sx={{
          padding: "10px 0",
          position: "relative",
          zIndex: 10000,
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          aria-label="Fortune Adebiyi's homepage"
        >
          {!isMobile ? (
            <Typography
              variant="body1"
              textAlign="center"
              style={{ maxWidth: 700, fontSize: "1.5rem" }}
              mt={2}
              component={motion.p}
              sx={{ color: theme.palette.text.secondary }}
            >
              <span itemProp="name">Fortune</span>
              <span
                style={{ color: theme.palette.primary.main }}
              >{`<Adebiyi>`}</span>
            </Typography>
          ) : (
            <img
              src="images\fortune_logo.webp"
              height={30}
              alt="Fortune Adebiyi - Portfolio Logo"
              loading="eager"
            />
          )}
        </Link>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MaterialUISwitch
            checked={theme.palette.mode === "dark"}
            onChange={colorMode.toggleColorMode}
            size={isMobile ? "small" : "medium"}
            inputProps={{ "aria-label": "toggle dark/light mode" }}
            sx={{ 
              display: 'flex',
              alignItems: 'center',
            }}
          />
          <HamburgerMenu isOpen={openMenu} onClick={toggleMenu} />
        </Stack>
      </Stack>

      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: theme.palette.background.default,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Navigation menu"
          >
            <Stack
              spacing={4}
              sx={{
                width: "100%",
                maxWidth: "600px",
                padding: "0 20px",
                textAlign: "center",
              }}
            >
              {menuItems.map((item, index) => {
                const linkProps = {
                  style: {
                    display: "block",
                    textAlign: "center" as const,
                    padding: "20px 0",
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  },
                  onClick: () => setOpenMenu(false),
                  "aria-label": item.ariaLabel,
                };

                const content = (
                  <Typography
                    fontWeight="bold"
                    variant="h3"
                    sx={{
                      position: "relative",
                      fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "3px",
                        bottom: "-10px",
                        left: "50%",
                        backgroundColor: theme.palette.primary.main,
                        transition: "all 0.4s ease",
                        transform: "translateX(-50%)",
                      },
                      "&:hover::after": {
                        width: "60%",
                      },
                      "&:hover": {
                        transform: "scale(1.05)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                );

                return (
                  <motion.div key={index} variants={menuItemVariants}>
                    {item.href.startsWith("#") ? (
                      <a href={item.href} {...linkProps}>
                        {content}
                      </a>
                    ) : (
                      <Link to={item.href} {...linkProps}>
                        {content}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </Stack>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MainBar;
