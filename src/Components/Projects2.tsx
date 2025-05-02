// import { Button, Hidden, Stack, Typography } from "@mui/material";
// import TitleComponent from "../TitleComponent";
// import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
// import { motion } from "framer-motion";

// const projectItems = [
//   {
//     title: "AI SCRIPTWRITER",
//     description:
//       "An AI-driven scriptwriting tool that not only helps them overcome creative blocks but also offers suggestions and generates alternative storylines to inspire and enhance their creative process.",
//     button: "Read case study",
//     image: "./images/p1.svg",
//     link: "/scriptwriter",
//   },
//   {
//     title: "AI STORYBOARD",
//     description:
//       "AI storyboard tool designed to assist users in visualizing scripts, generating story ideas with the help of an AI assistant, and creating boards from scratch.",
//     button: "Read case study",
//     image: "./images/p2.webp",
//     link: "/storyboard",
//   },
//   {
//     title: "CKROWD HOMEPAGE",
//     description:
//       "An intuitive homepage designed for seamless user conversion, serving as a centralized hub equipped with tools to gather your fans, engage with them directly, and monetize your platform.",
//     button: "Visit Ckrowd",
//     image: "./images/p3.webp",
//     link: "https://ckrowd.com",
//   },
//   {
//     title: "MAMAZEE HAIRWORLD",
//     description:
//       "An integrated online platform serving as a one-stop destination for all your hair care needs. Explore a wide range of high-quality hair products, from shampoos and conditioners to styling tools and treatments, all available for direct purchase with ease.",
//     button: "Coming soon",
//     image: "./images/p4.webp",
//     link: "#",
//   },
// ];

// const projectItems2 = [
//   {
//     title: "AI SCRIPTWRITER",
//     description:
//       "An AI-driven scriptwriting tool that not only helps them overcome creative blocks but also offers suggestions and generates alternative storylines to inspire and enhance their creative process.",
//     button: "Read case study",
//     image: "./images/pr1.svg",
//     link: "/scriptwriter",
//   },
//   {
//     title: "AI STORYBOARD",
//     description:
//       "AI storyboard tool designed to assist users in visualizing scripts, generating story ideas with the help of an AI assistant, and creating boards from scratch.",
//     button: "Read case study",
//     image: "./images/pr2.webp",
//     link: "/storyboard",
//   },
//   {
//     title: "CKROWD HOMEPAGE",
//     description:
//       "An intuitive homepage designed for seamless user conversion, serving as a centralized hub equipped with tools to gather your fans, engage with them directly, and monetize your platform.",
//     button: "Visit Ckrowd",
//     image: "./images/pr3.webp",
//     link: "https://ckrowd.com",
//   },
//   {
//     title: "MAMAZEE HAIRWORLD",
//     description:
//       "An integrated online platform serving as a one-stop destination for all your hair care needs. Explore a wide range of high-quality hair products, from shampoos and conditioners to styling tools and treatments, all available for direct purchase with ease.",
//     button: "Coming soon",
//     image: "./images/pr4.webp",
//     link: "/",
//   },
// ];

// const styles = {
//   flexBetween: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// };

// const Projects2 = () => {
//   return (
//     <div>
//       <Stack mt={{ xs: 10, md: 20 }}>
//         <TitleComponent
//           name={"Design"}
//           title={"RECENT PROJECTS"}
//           bigIcon={"./images/figma.webp"}
//           smallIcon={<DesignServicesOutlinedIcon fontSize="small" />}
//           description={
//             "I aim to prioritize user experiences that are both intuitive and delightful, bringing clarity and ease-of-use to the forefront of my design approach."
//           }
//         />
//       </Stack>

//       <Hidden mdDown>
//         <Stack>
//           {projectItems.map((item, index) => {
//             return (
//               <Stack
//                 mt={15}
//                 direction="row"
//                 key={index}
//                 sx={{
//                   ...styles.flexBetween,
//                   flexDirection: index % 2 === 1 ? "row-reverse" : "row",
//                 }}
//               >
//                 <Stack
//                   spacing={2}
//                   style={{
//                     maxWidth: "400px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "start",
//                     margin: "auto",
//                     padding: "1rem",
//                   }}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, x: -80 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1.5, type: "spring" }}
//                     viewport={{ once: true }}
//                   >
//                     <Typography variant="h3">{item.title}</Typography>
//                     <Typography variant="body1">{item.description}</Typography>
//                     <Stack pb={8} pt={2}>
//                       <motion.a
//                         className="box"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 20,
//                         }}
//                       >
//                         <Button variant="contained" href={item.link}>
//                           {item.button}
//                         </Button>
//                       </motion.a>
//                     </Stack>
//                   </motion.div>
//                 </Stack>

//                 <Stack width="50%">
//                   <img src={item.image} width="100%" height="100%" alt="" />
//                 </Stack>
//               </Stack>
//             );
//           })}
//         </Stack>
//       </Hidden>

//       <Hidden mdUp>
//         <Stack>
//           {projectItems2.map((item, index) => {
//             return (
//               <Stack mt={7} key={index}>
//                 <Stack
//                   spacing={2}
//                   m={3}
//                   style={{
//                     maxWidth: "400px",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "start",
//                   }}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1.5, type: "spring" }}
//                     viewport={{ once: true }}
//                   >
//                     <Typography variant="h3">{item.title}</Typography>
//                     <Typography variant="body1">{item.description}</Typography>
//                     <Stack pt={1}>
//                       <motion.a
//                         className="box"
//                         whileHover={{ scale: 1.05 }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 20,
//                         }}
//                       >
//                         <Button variant="contained" href={item.link}>
//                           {item.button}
//                         </Button>
//                       </motion.a>
//                     </Stack>
//                   </motion.div>
//                 </Stack>

//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 1.5, type: "spring" }}
//                   viewport={{ once: true }}
//                 >
//                   <Stack width="90%" mt={4} pt={5} style={{ margin: "auto" }}>
//                     <img src={item.image} width="100%" height="100%" alt="" />
//                   </Stack>
//                 </motion.div>
//               </Stack>
//             );
//           })}
//         </Stack>
//       </Hidden>
//     </div>
//   );
// };

// export default Projects2;
