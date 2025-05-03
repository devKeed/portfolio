import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { projectItems } from "../data/MapItems";

const styles = {
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Highlight = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <div>
      <Stack className="topSpace innerWidth" id="projects">
        <Typography
          variant="h2"
          fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
        >
          Projects <span style={{ color: "#8fff86" }}>Highlight</span>
        </Typography>
        <Typography variant="body1">
          Here are the skills I've acquired over the years, and I'm continuously
          expanding my knowledge in these areas.
        </Typography>
      </Stack>

      {!isMobile && (
        <Stack>
          {projectItems.map((item: { name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tech: string[]; link: string; button: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; image: string | undefined; }, index: number) => {
            return (
              <Stack
                mt={15}
                direction="row"
                key={index}
                sx={{
                  ...styles.flexBetween,
                  flexDirection: (index ?? 0) % 2 === 1 ? "row-reverse" : "row",
                }}
              >
                <Stack
                  spacing={2}
                  style={{
                    maxWidth: "400px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    margin: "auto",
                    padding: "1rem",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="h3">{item.name}</Typography>
                    <Typography variant="body1">{item.description}</Typography>

                    <Stack
                      mt={2}
                      maxWidth={{ md: 300, lg: 350 }}
                      direction="row"
                      sx={{ display: "flex", flexWrap: "wrap" }}
                    >
                        {item.tech.map((tool: string, id: number) => {
                        return (
                          <Typography
                          key={id}
                          padding={0.5}
                          fontSize={{ xs: 10, sm: 12, md: 14 }}
                          sx={{
                            background: "",
                            border: "1px solid #000",
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
                    <Stack pb={2} pt={2}>
                      <motion.a
                        className="box"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <Button variant="contained" href={item.link}>
                          {item.button} <ArrowOutwardIcon fontSize="small" />
                        </Button>
                      </motion.a>
                    </Stack>
                  </motion.div>
                </Stack>

                <Stack
                  width="50%"
                  style={{
                    borderRight: "10px solid #222",
                    borderBottom: "10px solid #222",
                    borderTop: "2px solid #222",
                    borderLeft: "2px solid #222",
                    borderRadius: "5px",
                  }}
                >
                  <img src={item.image} width="100%" height="100%" alt="" />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      )}

      {isMobile && (
        projectItems.map((project: { image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tech: any[]; link: string; button: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, id: Key | null | undefined) => {
          return (
            <Stack key={id} mt={2} className="flexBetween">
              <Stack spacing={2} mt={3} p={2}>
                <Stack
                  className="dropBox"
                  padding={2}
                  maxWidth={{ sm: 450, md: 480, lg: 550 }}
                  sx={{ background: "#fff" }}
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
                  <Typography variant="body2">{project.description}</Typography>
                  <Stack
                    maxWidth={{ md: 300, lg: 350 }}
                    direction="row"
                    mt={2}
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    {project.tech.map((tool: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, id: Key | null | undefined) => {
                      return (
                        <Typography
                          key={id}
                          padding={0.5}
                          fontSize={{ xs: 10, sm: 12, md: 14 }}
                          sx={{
                            background: "#dddddd",
                            border: "1px solid #000",
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
                  <Stack pb={2} pt={2}>
                    <motion.a
                      className="box"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Button variant="contained" href={project.link}>
                        {project.button} <ArrowOutwardIcon fontSize="small" />
                      </Button>
                    </motion.a>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        })
      )}
    </div>
  );
};

export default Highlight;
