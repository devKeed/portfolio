import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projectItems } from "../data/MapItems";

const Projects = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const highlightColor = theme.palette.mode === 'dark' ? "#8fff86" : "#8fff86";
  const boxBackground = theme.palette.mode === 'dark' ? theme.palette.background.paper : "#fff";
  const chipBackground = theme.palette.mode === 'dark' ? theme.palette.grey[800] : "#dddddd";
  const chipBorder = theme.palette.mode === 'dark' ? `1px solid ${theme.palette.grey[700]}` : "1px solid #000";
  
  return (
    <Stack className="topSpace innerWidth">
      <Typography
        variant="h2"
        fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
      >
        Projects <span style={{ color: highlightColor }}>Highlight</span>
      </Typography>
      <Typography variant="body1">
        Here are the skills I've acquired over the years, and I'm continuously
        expanding my knowledge in these areas.
      </Typography>
      
      {isDesktop && (
        projectItems.map((project, id) => {
          return (
            <Stack key={id} mt={10} className="flexBetween">
              <Stack
                direction="row"
                spacing={2}
                padding={2}
                className="dropBox"
                sx={{ background: boxBackground }}
              >
                <Stack
                  className="flexCol"
                  sx={{ justifyContent: "space-between" }}
                >
                  <Stack>
                    <Typography variant="h5" fontWeight="bold" mb={1}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                    <Stack
                      mt={2}
                      maxWidth={{ md: 300, lg: 350 }}
                      direction="row"
                      sx={{ display: "flex", flexWrap: "wrap" }}
                    >
                      {project.tech.map((tool, id) => {
                        return (
                          <Typography
                            key={id}
                            padding={0.5}
                            fontSize={{ xs: 10, sm: 12, md: 14 }}
                            sx={{
                              background: chipBackground,
                              border: chipBorder,
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {tool}
                          </Typography>
                        );
                      })}
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={4}
                    maxWidth={{ md: 270, lg: 350 }}
                    className="flexBetween"
                  >
                    <Stack spacing={1} direction="row" className="flexStart">
                      <a href="" style={{ color: 'inherit' }}>
                        <GitHubIcon className="pop-up" />{" "}
                      </a>
                    </Stack>
                    <Stack spacing={1} direction="row" className="flexStart">
                      <a href="" style={{ color: 'inherit' }}>
                        <LaunchIcon className="pop-up" />
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack width={{ sm: 290, md: 420, lg: 500 }} overflow="hidden">
                  <img
                    src={project.image}
                    className="scale-up"
                    height="100%"
                    width="100%"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Stack>
          );
        })
      )}
      
      {isMobile && (
        projectItems.map((project, id) => {
          return (
            <Stack key={id} mt={5} className="flexBetween">
              <Stack spacing={2} mt={3}>
                <Stack
                  className="dropBox"
                  padding={2}
                  maxWidth={{ sm: 450, md: 480, lg: 550 }}
                  sx={{ background: boxBackground }}
                >
                  <Stack overflow="hidden" mb={2}>
                    <img
                      src={project.image}
                      className="scale-up"
                      height="100%"
                      width="100%"
                      alt=""
                    />
                  </Stack>
                  <Typography variant="h5" fontWeight="bold">
                    {project.name}
                  </Typography>
                  <Typography variant="body2">
                    {" "}
                    {project.description}
                  </Typography>
                  <Stack
                    maxWidth={{ md: 300, lg: 350 }}
                    direction="row"
                    mt={2}
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {project.tech.map((tool, id) => {
                      return (
                        <Typography
                          key={id}
                          padding={0.5}
                          fontSize={{ xs: 10, sm: 12, md: 14 }}
                          sx={{
                            background: chipBackground,
                            border: chipBorder,
                            borderRadius: "5px",
                            marginRight: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {tool}
                        </Typography>
                      );
                    })}
                  </Stack>
                  <Stack
                    direction="row"
                    maxWidth={{ md: 270, lg: 350 }}
                    className="flexBetween"
                  >
                    <Stack spacing={1} direction="row" className="flexStart">
                      <a href="" style={{ color: 'inherit' }}>
                        <GitHubIcon className="pop-up" />{" "}
                      </a>
                    </Stack>
                    <Stack spacing={1} direction="row" className="flexStart">
                      <a href="" style={{ color: 'inherit' }}>
                        <LaunchIcon className="pop-up" />
                      </a>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        })
      )}
    </Stack>
  );
};

export default Projects;
