import {
  Stack,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Switch,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColorModeContext } from "./ColorMode";
import { Link } from "react-router-dom";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const MainBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "My projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact me", href: "#contact" },
  ];

  return (
    <div
      style={{
        borderBottom: "1.5px solid",
        borderColor: theme.palette.mode === "dark" ? "#fff" : "#000",
        color: theme.palette.text.primary,
      }}
    >
      {!isMobile && (
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row", margin: "auto" },
          }}
          spacing={2}
          className="flexBetween innerWidth"
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="body1"
              textAlign="center"
              style={{ maxWidth: 700, fontSize: "1.5rem" }}
              mt={2}
              component={motion.p}
              sx={{ color: theme.palette.text.secondary }}
            >
              Fortune{" "}
              <span style={{ color: theme.palette.primary.main }}>Dev</span>
            </Typography>
          </Link>
          <Stack direction="row" spacing={4} alignItems="center">
            {menuItems.map((item, index) => {
              // Use standard anchor tag for hash links (section navigation)
              if (item.href.startsWith('#')) {
                return (
                  <a key={index} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography fontWeight="bold">{item.label}</Typography>
                  </a>
                );
              }
              // Use React Router's Link for page navigation
              return (
                <Link key={index} to={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography fontWeight="bold">{item.label}</Typography>
                </Link>
              );
            })}
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
                aria-label="toggle dark/light mode"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <MaterialUISwitch
                checked={theme.palette.mode === "dark"}
                onChange={colorMode.toggleColorMode}
                inputProps={{ "aria-label": "toggle dark/light mode" }}
              />
            </Stack>
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
              zIndex: 100,
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img src="images\fortune_logo.webp" height={30} alt="" />
            </Link>
            <Stack direction="row" alignItems="center">
              <MaterialUISwitch
                checked={theme.palette.mode === "dark"}
                onChange={colorMode.toggleColorMode}
                size="small"
                inputProps={{ "aria-label": "toggle dark/light mode" }}
              />
              <IconButton
                onClick={toggleMenu}
                sx={{
                  transition: "transform 0.3s ease",
                  transform: openMenu ? "rotate(180deg)" : "rotate(0deg)",
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
                  background: theme.palette.background.default,
                  borderTop: `1.5px solid ${
                    theme.palette.mode === "dark" ? "#fff" : "#000"
                  }`,
                }}
              >
                <Stack
                  spacing={3}
                  sx={{
                    padding: "20px 0 40px",
                    width: "100%",
                  }}
                >
                  {menuItems.map((item, index) => {
                    const linkProps = {
                      style: {
                        display: "block",
                        textAlign: "center" as const,
                        padding: "10px 0",
                        color: theme.palette.text.primary,
                        textDecoration: 'none'
                      },
                      onClick: () => setOpenMenu(false)
                    };
                    
                    const content = (
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
                            backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
                            transition: "all 0.3s ease",
                            transform: "translateX(-50%)",
                          },
                          "&:hover::after": {
                            width: "40%",
                          },
                        }}
                      >
                        {item.label}
                      </Typography>
                    );
                    
                    return (
                      <motion.div key={index} variants={menuItemVariants}>
                        {item.href.startsWith('#') ? (
                          <a href={item.href} {...linkProps}>{content}</a>
                        ) : (
                          <Link to={item.href} {...linkProps}>{content}</Link>
                        )}
                      </motion.div>
                    );
                  })}
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
