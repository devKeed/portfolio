import { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import SEO from "./SEO";
import PageHeader from "./reusables/PageHeader";
import MyButton from "./reusables/MyButton";
import { usePageMotion } from "./reusables/usePageMotion";
import { blogPosts, getBlogPostById } from "../data/blogData";

const renderContent = (content: string) => {
  const formattedContent = content
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/\*\*(.*?)\*\*/gm, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/gm, "<em>$1</em>")
    .replace(/```([\s\S]*?)```/gm, "<pre><code>$1</code></pre>")
    .replace(/`([^`]+)`/gm, "<code>$1</code>")
    .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
    .replace(/^\* (.*$)/gm, "<li>$1</li>")
    .replace(/^(?!<[hpluc]|<pre|<code|<strong|<em)(.+)$/gm, "<p>$1</p>")
    .replace(/(<li>.*<\/li>)/gm, "<ul>$1</ul>")
    .replace(/<\/ul>\s*<ul>/gm, "");

  return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
};

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(id || "");
  const scopeRef = usePageMotion<HTMLDivElement>();

  if (!post) {
    return (
      <div className="page-shell shell" ref={scopeRef}>
        <section className="section">
          <p className="eyebrow" data-hero-fade>
            Blog
          </p>
          <h1 className="section-title" data-hero-fade>
            Article not found.
          </h1>
          <div className="section-actions" data-hero-fade>
            <MyButton text="Back to blog" link="/blog" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Fortune Adebiyi`}
        description={post.summary}
        keywords={post.tags.join(", ")}
      />

      <div className="page-shell" ref={scopeRef}>
        <PageHeader
          label={`Blog / ${post.date}`}
          title={post.title}
          description={post.summary}
          aside={`${post.readTime} / ${post.author}`}
        />

        <article className="article-shell shell">
          <div className="article-back" data-animate="up">
            <Link to="/blog">Back to all writing</Link>
          </div>

          {post.coverImage ? (
            <div className="article-media" data-animate="image">
              <img src={post.coverImage} alt={post.title} />
            </div>
          ) : null}

          <div className="article-meta" data-animate="up">
            <div className="pill-row">
              {post.tags.map((tag) => (
                <span className="skill-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="article-content" data-animate="up">
            {renderContent(post.content)}
          </div>
        </article>
      </div>
    </>
  );
};

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const scopeRef = usePageMotion<HTMLDivElement>();
  const filteredPosts = blogPosts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.summary.toLowerCase().includes(term) ||
      post.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog | Fortune Adebiyi"
        description="Writing on frontend engineering, TypeScript, React, and product-minded development."
        keywords="Fortune Adebiyi, blog, React, TypeScript, frontend engineering"
      />

      <div className="page-shell" ref={scopeRef}>
        <PageHeader
          label="Blog"
          title="Notes on frontend systems, product engineering, and the craft underneath the interface."
          description="A place for implementation details, opinions about better web experiences, and the occasional breakdown of tools worth using properly."
          aside="Short, practical writing. No filler."
        />

        <section className="section shell">
          <div className="search-row" data-animate="up">
            <input
              type="search"
              className="search-input"
              placeholder="Search by title, summary, or tag"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          {featuredPost ? (
            <article className="blog-featured">
              <Link
                to={`/blog/${featuredPost.id}`}
                className="blog-featured__media"
                data-animate="image"
              >
                {featuredPost.coverImage ? (
                  <img src={featuredPost.coverImage} alt={featuredPost.title} />
                ) : null}
              </Link>

              <div className="blog-featured__content" data-animate="up">
                <p className="eyebrow">
                  Featured / {featuredPost.date} / {featuredPost.readTime}
                </p>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.summary}</p>
                <div className="pill-row">
                  {featuredPost.tags.map((tag) => (
                    <span className="skill-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <MyButton text="Read article" link={`/blog/${featuredPost.id}`} />
              </div>
            </article>
          ) : null}

          <div className="blog-list">
            {remainingPosts.map((post) => (
              <article className="blog-row" data-animate="up" key={post.id}>
                <div className="blog-row__meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="blog-row__content">
                  <Link to={`/blog/${post.id}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.summary}</p>
                </div>
                <div className="blog-row__tags">
                  {post.tags.map((tag) => (
                    <span className="skill-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

const Blog = () => {
  return (
    <Routes>
      <Route index element={<BlogListing />} />
      <Route path=":id" element={<BlogPostDetail />} />
    </Routes>
  );
};

export default Blog;
