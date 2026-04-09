export interface ServiceItem {
  title: string;
  description: string;
  caption: string;
}

export interface ProjectItem {
  slug: string;
  button: string;
  name: string;
  year: string;
  category: string;
  role: string;
  location: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  featured?: boolean;
  scope: string[];
  impact: string[];
}

export const serviceItems: ServiceItem[] = [
  {
    title: "Product Engineering",
    caption: "From structure to shipped experience",
    description:
      "I build products from idea to deployment, covering frontend systems, API design, integration strategy, and the details that make a product feel coherent.",
  },
  {
    title: "Frontend Systems",
    caption: "Interfaces with restraint and precision",
    description:
      "I design and implement responsive interfaces that feel considered, readable, and fast, with strong component structure and careful motion.",
  },
  {
    title: "Backend Architecture",
    caption: "Reliable logic behind the interface",
    description:
      "I work across Node.js services, databases, auth flows, and operational logic so products stay maintainable as they scale.",
  },
  {
    title: "Creative Collaboration",
    caption: "Design, engineering, and product in one room",
    description:
      "I work well with designers, founders, and product teams, translating intent into systems and keeping execution clear from kickoff to release.",
  },
];

export const projectItems: ProjectItem[] = [
  {
    slug: "paystro",
    button: "View product",
    name: "Paystro",
    year: "2024",
    category: "Fintech Platform",
    role: "Software Engineer",
    location: "Payments / Mobile",
    summary:
      "Built core product flows for a cross-border payment platform spanning bill payments, peer-to-peer transfers, and transaction-heavy user journeys.",
    description:
      "Delivered production-facing features for a cross-border payments product using Flutter and React, with attention to usability, reliability, and the edge cases common in money movement flows.",
    tech: ["Flutter", "React", "PostgreSQL", "TypeScript", "Node.js", "Express"],
    image: "/images/paystro.png",
    link: "#",
    featured: true,
    scope: [
      "Transaction flow implementation",
      "Bill payment journeys",
      "Peer-to-peer transfer features",
      "Frontend and backend collaboration",
    ],
    impact: [
      "Improved clarity across money movement flows",
      "Shipped product-critical features in an operations-heavy environment",
    ],
  },
  {
    slug: "onetake",
    button: "View product",
    name: "OneTake",
    year: "2023",
    category: "Platform Build",
    role: "Team Lead / Backend Engineer",
    location: "Product / Mobile",
    summary:
      "Led delivery across product and backend for a mobile application with business logic, APIs, and end-to-end implementation oversight.",
    description:
      "Worked as team lead and backend engineer, developing the Flutter application and building Node.js, Express, and MongoDB APIs to support core business functionality.",
    tech: ["Flutter", "MongoDB", "Express", "Node.js", "TypeScript"],
    image: "/images/onetake.png",
    link: "#",
    featured: true,
    scope: [
      "Backend API architecture",
      "Business logic implementation",
      "Delivery leadership",
      "Cross-functional coordination",
    ],
    impact: [
      "Improved feature velocity across mobile and backend",
      "Created a clearer foundation for iteration and maintenance",
    ],
  },
  {
    slug: "nitoons-labs",
    button: "Open live site",
    name: "Nitoons Labs",
    year: "2024",
    category: "AI Product Suite",
    role: "Product Engineer",
    location: "Web Platform",
    summary:
      "Built out the public and product-facing experience for Nitoons Labs and parts of its creative tool ecosystem.",
    description:
      "Developed Nitoons Labs and parts of its product suite, including scriptwriter and storyteller workflows, using Next.js and Material UI with a focus on feature clarity and structured delivery.",
    tech: ["Next.js", "TypeScript", "Material UI", "Product UI"],
    image: "/images/nitoons_labs.png",
    link: "https://nitoons.com",
    featured: true,
    scope: [
      "Public-facing product experience",
      "Application feature implementation",
      "Design-system-led UI decisions",
      "Responsive frontend delivery",
    ],
    impact: [
      "Unified a broader creative tool ecosystem",
      "Improved product presentation and usability",
    ],
  },
  {
    slug: "pledre",
    button: "Open live site",
    name: "Pledre",
    year: "2024",
    category: "Education Platform",
    role: "Fullstack Developer",
    location: "SaaS",
    summary:
      "Built product modules and admin tooling for a learning platform with program management, certificates, dashboards, and bulk workflows.",
    description:
      "Worked as a fullstack developer on Pledre, shipping course categories, admin privacy policy, certificates, dashboard improvements, and bulk student-to-program assignment features.",
    tech: ["Next.js", "Material UI", "TypeScript", "MongoDB", "Node.js", "Express"],
    image: "/images/h3.webp",
    link: "https://pledre.com",
    featured: true,
    scope: [
      "Admin workflows",
      "Course and program management",
      "Dashboard implementation",
      "Operational tooling",
    ],
    impact: [
      "Reduced manual admin work with bulk actions",
      "Expanded platform functionality for internal teams",
    ],
  },
  {
    slug: "nitoons-academy",
    button: "Open live site",
    name: "Nitoons Academy",
    year: "2024",
    category: "Education Experience",
    role: "Frontend Engineer",
    location: "Learning Platform",
    summary:
      "Created an interactive learning experience connected to the Pledre API for filmmaking and animation education.",
    description:
      "Built the Nitoons Academy frontend on top of the Pledre API, shaping a student-facing experience for structured learning in filmmaking and animation.",
    tech: ["Next.js", "TypeScript", "Material UI", "Pledre API"],
    image: "/images/nitoons_academy.png",
    link: "https://academy.nitoons.com",
    scope: [
      "Student experience design",
      "API-driven frontend architecture",
      "Responsive course presentation",
    ],
    impact: [
      "Created a clearer learning journey for students",
      "Extended the parent platform into a focused education product",
    ],
  },
  {
    slug: "scriptwriter",
    button: "View product",
    name: "Scriptwriter",
    year: "2024",
    category: "Creative Tooling",
    role: "Fullstack Engineer",
    location: "Collaboration Product",
    summary:
      "Built collaborative writing features for a script development tool used within a broader creative suite.",
    description:
      "Implemented the collaborative text editor feature for Scriptwriter using React on the frontend and Node.js, TypeScript, and MongoDB on the backend.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB", "Collaboration"],
    image: "/images/h5.webp",
    link: "https://nitoons.com/dashboard",
    scope: [
      "Collaborative editing flows",
      "Frontend state management",
      "Backend feature support",
    ],
    impact: [
      "Enabled stronger real-time creative collaboration",
      "Added a key workflow to the product suite",
    ],
  },
  {
    slug: "storyteller",
    button: "View product",
    name: "Storyteller",
    year: "2024",
    category: "Creative Tooling",
    role: "Fullstack Engineer",
    location: "AI-Assisted Product",
    summary:
      "Developed image and video generation experiences for a storytelling tool inside the Nitoons ecosystem.",
    description:
      "Built the image and video content generation feature for Storyteller, using React on the frontend and Node.js, TypeScript, and MongoDB on the backend.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB", "Media Tooling"],
    image: "/images/h6.webp",
    link: "https://nitoons.com/dashboard",
    scope: [
      "Media generation workflows",
      "Product feature implementation",
      "Creative-tool interaction design",
    ],
    impact: [
      "Expanded creative output capabilities inside the suite",
      "Turned a complex workflow into a usable product feature",
    ],
  },
  {
    slug: "detoplea-marketing",
    button: "Open live site",
    name: "Detoplea Marketing",
    year: "2025",
    category: "Marketing Website",
    role: "Frontend Developer",
    location: "Brand Site",
    summary:
      "Developed a marketing-led website with a stronger editorial structure and cleaner frontend implementation.",
    description:
      "Built the Detoplea Marketing website using React, Tailwind CSS, and TypeScript, focusing on clarity, responsiveness, and presentation.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: "/images/detoplea.png",
    link: "https://detopleamarketing.com",
    scope: ["Marketing site build", "Responsive layout system", "Frontend polish"],
    impact: [
      "Improved how the brand presents services online",
      "Created a cleaner conversion-ready experience",
    ],
  },
  {
    slug: "vallery",
    button: "View project",
    name: "Vallery",
    year: "2025",
    category: "Product Website",
    role: "Frontend Developer",
    location: "Web Experience",
    summary:
      "Built a modern responsive frontend for a product-focused web experience.",
    description:
      "Developed the Vallery experience using React, Tailwind CSS, and TypeScript with emphasis on speed, responsive behavior, and cleaner visual presentation.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: "/images/vallery.png",
    link: "/",
    scope: ["Responsive frontend", "Visual refinement", "Component implementation"],
    impact: [
      "Delivered a more coherent web presence",
      "Improved readability and structure across screens",
    ],
  },
  {
    slug: "african-warriors-fc",
    button: "Open live site",
    name: "African Warriors FC",
    year: "2025",
    category: "Sports Website",
    role: "Frontend Developer",
    location: "Public Website",
    summary:
      "Built a clean, brand-focused website experience for a football club.",
    description:
      "Created the African Warriors FC website using React, Tailwind CSS, and TypeScript, centering the build around clarity, structure, and an accessible content experience.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: "/images/awfc.png",
    link: "https://www.africanwarriorsfc.com/",
    scope: ["Frontend build", "Responsive layout", "Brand presentation"],
    impact: [
      "Improved the club's digital presentation",
      "Created a more structured public-facing website",
    ],
  },
  {
    slug: "nitoons-home",
    button: "Open live site",
    name: "Nitoons",
    year: "2024",
    category: "Studio Website",
    role: "Frontend Developer",
    location: "Brand Website",
    summary:
      "Built part of the public-facing Nitoons web presence with a focus on structure and performance.",
    description:
      "Worked on the Nitoons website using React, Material UI, and TypeScript to create a clearer, more scalable frontend experience.",
    tech: ["React", "Material UI", "TypeScript"],
    image: "/images/h1.webp",
    link: "https://nitoons.com/home",
    scope: ["Public website frontend", "UI implementation", "Responsive behavior"],
    impact: [
      "Strengthened the online presentation of the brand",
      "Created a more maintainable frontend foundation",
    ],
  },
];

export const graphics = [
  { image: "/images/h4.webp" },
  { image: "/images/h4.webp" },
  { image: "/images/h4.webp" },
  { image: "/images/h4.webp" },
];

export const pages = [
  { image: "/images/a1.webp" },
  { image: "/images/a2.webp" },
  { image: "/images/a3.webp" },
  { image: "/images/a4.webp" },
  { image: "/images/a5.webp" },
  { image: "/images/a6.webp" },
  { image: "/images/a7.webp" },
  { image: "/images/a8.webp" },
];
