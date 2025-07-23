import { useState } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import {
  Stack,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  useTheme,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { blogPosts, getBlogPostById } from "../data/blogData";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MainBar from "./MainBar";

// Component to display a single blog post
const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const navigate = useNavigate();
  const post = getBlogPostById(id || "");

  if (!post) {
    return (
      <Stack spacing={3} className="topSpace innerWidth">
        <Typography variant="h2">Blog Post Not Found</Typography>
        <Link
          to="/blog"
          style={{ textDecoration: "none", color: theme.palette.primary.main }}
        >
          ← Back to all posts
        </Link>
      </Stack>
    );
  }

  // Function to convert markdown content to HTML
  const renderContent = (content: string) => {
    // This is a simple implementation that handles basic markdown
    // For a production app, you'd want to use a proper markdown parser
    const formattedContent = content
      // Handle headings
      .replace(/^# (.*$)/gm, "<h1>$1</h1>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      // Handle bold
      .replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>")
      // Handle italic
      .replace(/\*(.*)\*/gm, "<em>$1</em>")
      // Handle code blocks
      .replace(/```([\s\S]*?)```/gm, "<pre><code>$1</code></pre>")
      // Handle inline code
      .replace(/`([^`]+)`/gm, "<code>$1</code>")
      // Handle lists
      .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
      .replace(/^\* (.*$)/gm, "<li>$1</li>")
      // Handle paragraphs
      .replace(/^(?!<[hl]|<li|<code|<pre|<strong|<em)(.*$)/gm, "<p>$1</p>");

    return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
  };

  // Animation variants for the blog post
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
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  return (
    <>
 
    <Stack
      spacing={3}
      className="topSpace innerWidth"
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ mb: 4 }}
    >
      <Box sx={{ mb: 2 }}>
        <IconButton
          onClick={() => navigate("/blog")}
          sx={{
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          <ArrowBackIcon /> <Typography ml={1}>Back to all posts</Typography>
        </IconButton>
      </Box>

      <motion.div variants={itemVariants}>
        {post.coverImage && (
          <CardMedia
            component="img"
            height="400"
            image={post.coverImage}
            alt={post.title}
            sx={{
              borderRadius: "8px",
              mb: 3,
            }}
          />
        )}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography variant="h2" gutterBottom>
          {post.title}
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mb: 2,
        }}
        component={motion.div}
        variants={itemVariants}
      >
        <Typography variant="body2" color="text.secondary">
          {post.date} • {post.readTime}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {post.author}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          mb: 3,
        }}
        component={motion.div}
        variants={itemVariants}
      >
        {post.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              backgroundColor: theme.palette.mode === "dark" ? "#333" : "#eee",
              color: theme.palette.text.primary,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          typography: "body1",
          "& h1": {
            fontSize: "2rem",
            mt: 3,
            mb: 2,
            fontFamily: theme.typography.h1.fontFamily,
          },
          "& h2": {
            fontSize: "1.5rem",
            mt: 3,
            mb: 2,
            fontFamily: theme.typography.h2.fontFamily,
          },
          "& h3": {
            fontSize: "1.2rem",
            mt: 3,
            mb: 2,
            fontFamily: theme.typography.h3.fontFamily,
          },
          "& p": { mb: 2 },
          "& pre": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#1a1a1a" : "#f5f5f5",
            padding: theme.spacing(2),
            borderRadius: "4px",
            overflowX: "auto",
            mb: 2,
          },
          "& code": {
            fontFamily: "monospace",
            backgroundColor:
              theme.palette.mode === "dark" ? "#2d2d2d" : "#f0f0f0",
            padding: "2px 4px",
            borderRadius: "4px",
          },
          "& li": { mb: 1 },
        }}
        component={motion.div}
        variants={itemVariants}
      >
        {renderContent(post.content)}
      </Box>
    </Stack></>
  );
};

// Component to display blog listing
const BlogListing = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [searchTerm, setSearchTerm] = useState("");

  // Filter posts based on search term
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Animation variants for the blog list
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
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <>
       <MainBar/>
    <Stack spacing={3} className="topSpace innerWidth">
      <Typography variant="h2">
        Blo
        <span style={{ color: isDarkMode ? "#64CF5CFF" : "#44AF3CFF" }}>g</span>
      </Typography>
      <Typography variant="body1">
        Thoughts, stories and ideas on web development, design, and technology.
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search posts..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid
        container
        spacing={3}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            style={{ width: "100%", padding: "12px" }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", sm: "50%", md: "33.33%" },
              }}
            >
              <Link
                to={`/blog/${post.id}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Box
                  className="dropBox"
                  sx={{
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Card
                    className="dropBox"
                    sx={{
                      height: "100%",
                      borderRadius: "8px",
                      display: "flex",
                      flexDirection: "column",

                      backgroundColor:
                        theme.palette.mode === "dark" ? "#2a2a2a" : "#fff",
                      boxShadow: "none",
                      // border: `1px solid ${theme.palette.mode === 'dark' ? '#3a3a3a' : '#e0e0e0'}`,
                    }}
                  >
                    {post.coverImage && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={post.coverImage}
                        alt={post.title}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        color="text.primary"
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {post.summary}
                      </Typography>
                      <Box sx={{ mt: "auto", pt: 1 }}></Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {post.readTime}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 1,
                        }}
                      >
                        {post.tags.slice(0, 2).map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor:
                                theme.palette.mode === "dark" ? "#333" : "#eee",
                              color: theme.palette.text.primary,
                            }}
                          />
                        ))}
                        {post.tags.length > 2 && (
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ alignSelf: "center" }}
                          >
                            +{post.tags.length - 2}
                          </Typography>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Link>
            </Box>
          </motion.div>
        ))}

        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: "center", py: 4, width: "100%" }}>
            <Typography variant="h6">
              No posts found matching "{searchTerm}"
            </Typography>
          </Box>
        )}
      </Grid>
    </Stack></>
  );
};

// Main Blog component with routes
const Blog = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogListing />} />
      <Route path="/:id" element={<BlogPostDetail />} />
    </Routes>
  );
};

export default Blog;
