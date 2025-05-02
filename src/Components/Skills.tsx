import { Grid, Stack, Typography } from "@mui/material";
import { skillItems } from "./MapItems";

const Skills = () => {
  return (
    <Stack className="topSpace innerWidth">
      <Typography variant="h2" fontSize={{xs:"1.7rem", sm:"2rem", lg:"2.5rem"}}>Ski<span style={{color:"#8fff86"}}>ll</span>s</Typography>
      <Typography variant="body1">
        My primary stack includes React, MUI & Typescript. I have listed some of
        the languages/tools I have used or still use below; there are a lot more
        but these are the ones I deemed necessary to list.
      </Typography>
      <div>
        <Grid container mt={2} spacing={4}>
          {skillItems.map((skill, id) => {
            return (
              <Grid item xs={4} sm={3} md={2} key={id}>
                <Stack
                  padding={1}
                  className="flexCenter dropBox pop-up"
                  sx={{background:"#fff",
                    "&:hover": { background: `${skill.color}` },
                  }}
                >
                  <Stack
                    height={{ xs: 18, sm: 26, md: 32 }}
                    width={{ xs: 18, sm: 26, md: 32 }}
                    
                  >
                    <img height="100%" width="100%" src={skill.icon} alt="" />
                  </Stack>
                  <Typography fontSize={{ xs: 11, sm: 14, md: 16 }}>
                    {skill.name}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Stack>
  );
};

export default Skills;
