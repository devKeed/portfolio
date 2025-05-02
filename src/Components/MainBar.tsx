import { Stack, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";

const MainBar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            <a href="/">
              <Typography fontWeight="bold">Home</Typography>
            </a>

            <a href="#projects">
              <Typography fontWeight="bold">My projects</Typography>
            </a>

            {/* <a href="">
              <Typography fontWeight="bold">Blog</Typography>
            </a> */}

            <a href="#contact">
              <Typography fontWeight="bold">Contact me</Typography>
            </a>
          </Stack>
        </Stack>
      )}

      {isMobile && (
        <>
          <Stack direction="row" className="innerWidth flexBetween">
            <a href="/">
              <img src="images\fortune_logo.webp" height={30} alt="" />
            </a>
            <IconButton
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <MenuOpenIcon />
            </IconButton>
          </Stack>

          {openMenu && (
            <Stack
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
                background: "#fff",
                transition: "transform 0.3s ease-in-out",
                transform: openMenu ? "translateY(1000)" : "translateY(600%)",
                borderTop: "1.5px solid #000",
              }}
            >
              <Stack spacing={4} sx={{ textAlign: "center" }}>
                <a href="/">
                  <Typography fontWeight="bold">Home</Typography>
                </a>

                <a href="#projects">
                  <Typography fontWeight="bold">My projects</Typography>
                </a>

                {/* <a href="">
                <Typography fontWeight="bold">Blog</Typography>
              </a> */}

                <a href="#contact">
                  <Typography fontWeight="bold">Contact me</Typography>
                </a>
              </Stack>
            </Stack>
          )}
        </>
      )}
    </div>
  );
};

export default MainBar;
