import Grid from '@mui/material/GridLegacy';
import { Typography, Container } from "@mui/material";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container maxWidth="lg" >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Fortune Adebiyi ©{currentYear}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
