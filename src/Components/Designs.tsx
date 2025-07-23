import { Stack, Typography, IconButton, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";
import { pages } from "../data/MapItems";

const Designs = () => {
  const scrollRef: any = useRef(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: "10px",
        }}
        className="topSpace innerWidth"
        id="projects"
      >
        <div>
          <Typography
            variant="h2"
            fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
          >
            My{" "}
            <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>
              Designs
            </span>
          </Typography>
          <Typography variant="body1">
            I also have experience in Graphics design and UI/UX design
          </Typography>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <IconButton onClick={scrollLeft} style={{ border: "2px solid #000" }}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            style={{ border: "2px solid #000" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <div
          ref={scrollRef}
          style={{
            overflowX: "auto",
            display: "flex",
            gap: "20px",
            paddingLeft: "20px",
            width: "100%",
          }}
        >
          {pages.map((page, index) => (
            <div key={index}>
              <img
                src={page.image}
                width="300px"
                style={{
                  borderRadius: "10px",
                  border: "2px solid #000",
                  flex: "0 0 auto",
                  overflow: "hidden",
                }}
              />
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default Designs;
