import { Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const contactItems = [
  {
    icon: <PhoneIcon />,
    label: "Call Fortune",
    link: "tel:+2347063807894",
    itemProp: "telephone",
    value: "+2347063807894",
    bg: "#4CAF50",
  },
  {
    icon: <EmailIcon />,
    label: "Email Fortune",
    link: "mailto:fortuneadebiyi@gmail.com",
    itemProp: "email",
    value: "fortuneadebiyi@gmail.com",
    bg: "#FF5722",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    link: "https://wa.me/2348027725422",
    itemProp: "sameAs",
    value: "https://wa.me/2348027725422",
    bg: "#25D366",
  },
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    link: "https://github.com/pledreDev",
    itemProp: "sameAs",
    value: "https://github.com/pledreDev",
    bg: "#333333",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    link: "https://linkedin.com/in/fortune-adebiyi",
    itemProp: "sameAs",
    value: "https://linkedin.com/in/fortune-adebiyi",
    bg: "#0077B5",
  },
  {
    icon: <TwitterIcon />,
    label: "Twitter",
    link: "https://twitter.com/fortuneadebiyi",
    itemProp: "sameAs",
    value: "https://twitter.com/fortuneadebiyi",
    bg: "#1DA1F2",
  },
];

const SocialList = styled("ul")(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginTop: "3rem",
}));

const SocialLink = styled("a")<{ bg: string; isDark: boolean }>(
  ({ bg, isDark }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1",
    fontSize: "1.75rem",
    color: isDark ? "#ffffff" : "#070707",
    border: `2px solid ${isDark ? "#444444" : "#e0e0e0"}`,
    borderRadius: "50%",
    textDecoration: "none",
    outline: "none",
    overflow: "hidden",
    transition:
      "color 0.3s ease-in-out, border-color 0.3s ease-in-out, transform 0.2s ease-in-out",
    width: "4.5rem",
    height: "4.5rem",

    "& > svg": {
      position: "relative",
      zIndex: 1,
      fontSize: "1.5rem",
    },

    "&::after": {
      position: "absolute",
      content: '""',
      top: "100%",
      left: 0,
      right: 0,
      bottom: 0,
      background: bg,
      pointerEvents: "none",
      transition: "top 0.3s ease-in-out",
    },

    "&:hover, &:focus-visible": {
      color: "#fff",
      borderColor: bg,
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px ${bg}40`,
    },

    "&:hover::after, &:focus-visible::after": {
      top: 0,
    },
  })
);

const Contact = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <section
      id="contact"
      className="contact-section"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Fortune Adebiyi" />
      <Stack
        className="topSpace innerWidth"
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        sx={{ textAlign: "center" }}
      >
        <Typography
          component={motion.h1}
          variant="h1"
          fontSize={{ xs: "2rem", sm: "2.5rem", lg: "3.1rem" }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          sx={{ marginBottom: 2 }}
        >
          Let's work together on your next{" "}
          <span
            style={{
              color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF",
              marginLeft: "10px",
            }}
          >
            project
          </span>
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{paddingBottom: "5rem"}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <SocialList>
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                      <SocialLink
                    href={item.link}
                    bg={item.bg}
                    isDark={isDarkMode}
                    aria-label={item.label}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    itemProp={item.itemProp}
                    content={item.value}
                  >
                    {item.icon}
                  </SocialLink>
            
              </motion.div>
            ))}
          </SocialList>
        </motion.div>
      </Stack>
    </section>
  );
};

export default Contact;
