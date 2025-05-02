import { Grid, Stack, Typography } from "@mui/material";
import { serviceItems } from "./MapItems";

const Service = () => {
  return (
    <Stack className="topSpace innerWidth flexCenter">
      <Typography
        variant="h2"
        fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
      >
        What do I <span style={{ color: "#8fff86" }}>do</span>?
      </Typography>
      <Grid container mt={1} spacing={4} className="flexCenter">
        {serviceItems.map((service, id) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Stack
                padding={2}
                spacing={2}
                className="flexStart dropBox pop-up"
                height={{ xs: 300, sm: 280, md: 300 }}
                sx={{background:"#fff",
                  "&:hover": { background: "#8fff86" },
                }}
              >
                {service.icon}
                <Typography variant="h3">{service.title}</Typography>
                <Typography variant="body1" textAlign="center">
                  {service.description}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Service;
