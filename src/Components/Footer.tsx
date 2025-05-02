import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import CallIcon from "@mui/icons-material/Call";
// import LinkedinIcon from "@mui/icons-material/LinkedIn";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <Stack className="topSpace" sx={{ borderTop: "1.5px solid #444444" }}>
      <div className="flexCenter">
        <Grid container className="innerWidth">
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Fortune Adebiyi ©{currentYear}
            </Typography>
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", sm: "flex-end" },
              marginTop: { xs: 3, sm: 0 },
            }}
          >
            <Stack spacing={2} direction="row">
              <a href="https://twitter.com/pledreHQ" className="icon-link">
                <TwitterIcon sx={{ color: "#000" }} />
              </a>

              <a href="tel:+2348156459825" className="icon-link">
                <CallIcon sx={{ color: "#000" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/pledre"
                className="icon-link"
              >
                <LinkedinIcon sx={{ color: "#000" }} />
              </a>
            </Stack>
          </Grid> */}
        </Grid>
      </div>
      <div className="footer"></div>
    </Stack>
  );
};
