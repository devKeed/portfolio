import Grid from "@mui/material/GridLegacy";
import {
  Stack,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  useTheme,
  Box,
  Alert,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import SEO from "./SEO";

const contactItems = [
  {
    icon: <PhoneIcon />,
    label: "Call Fortune Adebiyi",
    value: "+2347063807894",
    link: "tel:+2347063807894",
    itemProp: "telephone",
  },
  {
    icon: <EmailIcon />,
    label: "Email Fortune Adebiyi",
    value: "fortuneadebiyi@gmail.com",
    link: "mailto:fortuneadebiyi@gmail.com",
    itemProp: "email",
  },
  {
    icon: <WhatsAppIcon />,
    label: "Chat with Fortune on WhatsApp",
    value: "+2348027725422",
    link: "https://wa.me/2348027725422",
    itemProp: "sameAs",
  },
  {
    icon: <LocationOnIcon />,
    label: "Location",
    value: "Lagos, Nigeria",
    link: "https://maps.google.com/?q=Lagos,Nigeria",
    itemProp: "address",
  },
];

const socialItems = [
  {
    icon: <GitHubIcon />,
    label: "GitHub",
    link: "https://github.com/pledreDev",
    color: "#333",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/fortuneadebiyi",
    color: "#0077B5",
  },
  {
    icon: <TwitterIcon />,
    label: "Twitter",
    link: "https://twitter.com/fortune_adebiyi",
    color: "#1DA1F2",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // This would typically send the data to a server
      console.log("Form submitted:", formData);

      // Show success message
      setSnackbar({
        open: true,
        message: "Message sent successfully! I will get back to you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setSnackbar({
        open: true,
        message: "Please fill all required fields correctly.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <SEO
        title="Contact Fortune Adebiyi | Get in Touch"
        description="Get in touch with Fortune Adebiyi. Send a message or connect through social media to discuss projects, collaborations, or inquiries."
        keywords="Fortune Adebiyi, contact, email, phone, message, collaboration, projects"
      />

      <section
        id="contact"
        className="contact-section topSpace innerWidth"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="Fortune Adebiyi" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              fontSize={{ xs: "1.7rem", sm: "2rem", lg: "2.5rem" }}
              gutterBottom
            >
              Get in{" "}
              <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>
                Touch
              </span>
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }} itemProp="description">
              Have a project in mind or want to collaborate? Fill out the form
              below or reach out directly through any of my contact channels.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Contact Form Section */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  className="dropBox"
                  sx={{
                    p: 3,
                    backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                    mb: 4,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Send me a message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Your Name"
                          name="name"
                          fullWidth
                          required
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          helperText={errors.name}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Your Email"
                          name="email"
                          type="email"
                          fullWidth
                          required
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          helperText={errors.email}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Subject"
                          name="subject"
                          fullWidth
                          value={formData.subject}
                          onChange={handleChange}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Your Message"
                          name="message"
                          multiline
                          rows={5}
                          fullWidth
                          required
                          value={formData.message}
                          onChange={handleChange}
                          error={!!errors.message}
                          helperText={errors.message}
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          className="portfolio-button"
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Info Section */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper
                  elevation={0}
                  className="dropBox"
                  sx={{
                    p: 3,
                    backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                    mb: 3,
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>

                  <Stack spacing={2}>
                    {contactItems.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <IconButton
                          size="small"
                          sx={{
                            border: "2px solid",
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          }}
                          aria-label={item.label}
                        >
                          {item.icon}
                        </IconButton>
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="a"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            itemProp={item.itemProp}
                            sx={{
                              textDecoration: "none",
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Find me on
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      {socialItems.map((item, index) => (
                        <IconButton
                          key={index}
                          component="a"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Fortune Adebiyi's ${item.label}`}
                          className="pop-up"
                          sx={{
                            border: "1px solid",
                            borderColor:
                              theme.palette.mode === "dark" ? "#fff" : "#000",
                            transition: "all 0.3s",
                            "&:hover": {
                              backgroundColor: item.color,
                              borderColor: item.color,
                              color: "#fff",
                            },
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      ))}
                    </Stack>
                  </Box>
                </Paper>

                <Paper
                  elevation={0}
                  className="dropBox"
                  sx={{
                    p: 3,
                    backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    Working Hours
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Monday - Friday
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      9:00 AM - 6:00 PM (WAT)
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Saturday
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      10:00 AM - 2:00 PM (WAT)
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    I'm flexible and can accommodate different time zones for
                    meetings and urgent matters.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Snackbar for form submission feedback */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </section>
    </>
  );
};

export default ContactPage;
