export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    summary: "A comprehensive guide to getting started with React in 2025, covering the latest features and best practices.",
    content: `
# Getting Started with React in 2025

React continues to be one of the most popular front-end libraries in 2025. With the release of React 19, we've seen significant improvements in performance and developer experience. 

## Setting up a new React project

The easiest way to get started with React is to use Vite. Run the following command:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
\`\`\`

This sets up a new React project with TypeScript support, which is highly recommended for any serious project.

## Key React 19 Features

React 19 introduced several game-changing features that make development easier:

1. **Improved Server Components**: Better integration with back-end systems
2. **React Compiler**: Automatic optimizations at build time
3. **Suspense Enhancements**: More granular loading states
4. **Simplified Context API**: More intuitive context management

## Building Your First Component

Let's create a simple counter component:

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
\`\`\`

That's it for getting started! In future posts, we'll explore more advanced React concepts.
    `,
    date: "May 1, 2025",
    author: "Fortune Dev",
    tags: ["React", "JavaScript", "Web Development"],
    coverImage: "/images/a1.webp",
    readTime: "5 min read"
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    summary: "Learn essential TypeScript patterns and practices to improve your React code quality.",
    content: `
# TypeScript Best Practices for React Developers

TypeScript has become the standard for writing React applications in 2025. Let's explore some best practices that will help you write cleaner, more maintainable code.

## Use Proper Types for Props

Always define explicit interfaces for your component props:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
}

const Button = ({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
\`\`\`

## Leverage TypeScript's Utility Types

TypeScript provides several utility types that can make your code more concise:

\`\`\`tsx
// Pick only certain properties from an interface
type UserProfileProps = Pick<User, 'name' | 'email' | 'avatar'>;

// Make all properties optional
type PartialConfig = Partial<Configuration>;

// Make all properties required
type RequiredOptions = Required<Options>;
\`\`\`

## Use Discriminated Unions for State

When dealing with complex state transitions, use discriminated unions:

\`\`\`tsx
type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: User[];
};

type ErrorState = {
  status: 'error';
  error: string;
};

type State = LoadingState | SuccessState | ErrorState;
\`\`\`

This allows for exhaustive pattern matching in your components:

\`\`\`tsx
function UserList({ state }: { state: State }) {
  switch (state.status) {
    case 'loading':
      return <LoadingSpinner />;
    case 'success':
      return <UserGrid users={state.data} />;
    case 'error':
      return <ErrorMessage message={state.error} />;
  }
}
\`\`\`

By following these TypeScript best practices, you'll catch more errors at compile time and improve the overall quality of your React applications.
    `,
    date: "April 15, 2025",
    author: "Fortune Dev",
    tags: ["TypeScript", "React", "Web Development"],
    coverImage: "/images/a2.webp",
    readTime: "8 min read"
  },
  {
    id: "ui-animations-with-framer-motion",
    title: "Creating Engaging UI Animations with Framer Motion",
    summary: "Learn how to implement beautiful animations in your React application using Framer Motion.",
    content: `
# Creating Engaging UI Animations with Framer Motion

Adding thoughtful animations to your UI can significantly enhance user experience. Framer Motion is a powerful library that makes complex animations simple to implement in React applications.

## Getting Started with Framer Motion

First, install the package:

\`\`\`bash
npm install framer-motion
\`\`\`

## Basic Animation Example

Here's a simple animation that fades in and slides up:

\`\`\`tsx
import { motion } from 'framer-motion';

const FadeIn = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);
\`\`\`

## Staggered List Animations

Creating staggered animations for lists is straightforward:

\`\`\`tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AnimatedList = ({ items }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={item}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};
\`\`\`

## Gesture Animations

Framer Motion also makes it easy to add gesture-based animations:

\`\`\`tsx
import { motion } from 'framer-motion';

const DraggableItem = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Drag me!
    </motion.div>
  );
};
\`\`\`

By incorporating these animation techniques into your React applications, you can create more engaging and polished user experiences.
    `,
    date: "March 22, 2025",
    author: "Fortune Dev",
    tags: ["Animation", "React", "Framer Motion", "UI/UX"],
    coverImage: "/images/a3.webp",
    readTime: "6 min read"
  }
];

// Helper function to get a blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};