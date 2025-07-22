import { useTheme } from "@mui/material";
import { useState } from "react";

const MyButton = ({ text, link }: { text: string; link: string }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: "relative" as const,
    overflow: "hidden" as const,
    border: `1px solid ${theme.palette.mode === "dark" ? "#fff" : "#18181a"}`,
    color: theme.palette.mode === "dark" ? "#fff" : "#18181a",
    display: "inline-block" as const,
    fontSize: "15px",
    lineHeight: "15px",
    padding: "18px 18px 17px",
    textDecoration: "none" as const,
    cursor: "pointer" as const,
    background: theme.palette.mode === "dark" ? "#000" : "#fff",
    userSelect: "none" as const,
    WebkitUserSelect: "none" as const,
    touchAction: "manipulation" as const,
  };

  const firstSpanStyle = {
    position: "relative" as const,
    transition: "color 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 10,
    color: isHovered
      ? theme.palette.mode === "dark"
        ? "#000"
        : "#fff"
      : theme.palette.mode === "dark"
      ? "#fff"
      : "#18181a",
  };

  const secondSpanStyle = {
    color: theme.palette.mode === "dark" ? "#000" : "#fff",
    display: "block" as const,
    position: "absolute" as const,
    bottom: 0,
    transition: "all 900ms cubic-bezier(0.48, 0, 0.12, 1)",
    zIndex: 100,
    opacity: isHovered ? 1 : 0,
    top: "50%",
    left: "50%",
    transform: isHovered
      ? "translateX(-50%) translateY(-100%)"
      : "translateY(225%) translateX(-50%)",
    height: "14px",
    lineHeight: "13px",
  };

  const afterElementStyle = {
    content: '""',
    position: "absolute" as const,
    bottom: "-50%",
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
    transformOrigin: "bottom center",
    transition: "transform 600ms cubic-bezier(0.48, 0, 0.12, 1)",
    transform: isHovered
      ? "skewY(9.3deg) scaleY(2)"
      : "skewY(9.3deg) scaleY(0)",
    zIndex: 50,
  };

  return (
    <a href={link}>
      {" "}
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
      >
        <span style={firstSpanStyle}>{text}</span>
        <span style={secondSpanStyle}>{text}</span>
        <div style={afterElementStyle} />
      </button>
    </a>
  );
};

export default MyButton;
