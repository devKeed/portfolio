import { Stack, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

const contactItems = [
  { 
    icon: <PhoneIcon />, 
    label: "Call Fortune Adebiyi", 
    link: "tel:+2347063807894",
    itemProp: "telephone",
    value: "+2347063807894" 
  },
  {
    icon: <EmailIcon />,
    label: "Email Fortune Adebiyi",
    link: "mailto:fortuneadebiyi@gmail.com",
    itemProp: "email",
    value: "fortuneadebiyi@gmail.com"
  },
  {
    icon: <WhatsAppIcon />,
    label: "Chat with Fortune on WhatsApp",
    link: "https://wa.me/2348027725422",
    itemProp: "sameAs",
    value: "https://wa.me/2348027725422"
  },
  {
    icon: <GitHubIcon />,
    label: "Fortune Adebiyi's GitHub",
    link: "https://github.com/pledreDev",
    itemProp: "sameAs",
    value: "https://github.com/pledreDev"
  },
];

const Contact = () => {
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
      >
        <Typography
          component={motion.h2}
          variant="h2"
          fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {" "}
          <Typography variant="h1" maxWidth={700} fontSize={{ xs: "2rem", sm: "2.5rem", lg: "3.1rem" }}>
            Let's work together with on your next{" "}
            <span style={{ color: "#8fff86", marginLeft: "10px" }}>project</span>{" "}
          </Typography>
        </Typography>

        {contactItems.map((item, index) => (
          <Stack
            key={item.label}
            direction="row"
            alignItems="center"
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <IconButton
              color="primary"
              aria-label={item.label}
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "6px",
                borderRadius: "50%",
                border: "1px solid #000",
                marginTop: "8px",
              }}
              itemProp={item.itemProp}
              content={item.value}
            >
              {item.icon}
            </IconButton>
            <Typography variant="body1">{item.label}</Typography>
          </Stack>
        ))}
      </Stack>
    </section>
  );
};

export default Contact;
