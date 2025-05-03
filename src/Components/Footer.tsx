import { Grid, Typography, Container } from "@mui/material";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import CallIcon from "@mui/icons-material/Call";
// import LinkedinIcon from "@mui/icons-material/LinkedIn";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6}>
            <Typography variant="body2">
              Fortune Adebiyi ©{currentYear}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
