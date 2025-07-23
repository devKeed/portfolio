import React from "react";
import { styled } from "@mui/material/styles";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const StyledButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: 30,
  height: 30,
  transition: "all 300ms cubic-bezier(.61, .01, .42, 1)",
  cursor: "pointer",
  background: "transparent",
  border: "0px",
  padding: 0,
  margin: "0 0 0 8px",

  "&:focus": {
    outline: "0px",
  },

  "& div": {
    height: 2,
    backgroundColor: theme.palette.text.primary,
    width: 22,
    display: "block",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 300ms cubic-bezier(.61, .01, .42, 1)",
    borderRadius: "1px",
  },

  "& div:nth-child(1)": {
    top: "calc(50% - 8px)",
  },

  "& div:nth-child(2)": {
    top: "50%",
  },

  "& div:nth-child(3)": {
    top: "calc(50% + 8px)",
  },

  // Active states (when menu is open) - X formation
  "&.active div:nth-child(1)": {
    transform: "translateX(-50%) rotate(45deg)",
    top: "50%",
  },

  "&.active div:nth-child(2)": {
    opacity: 0,
  },

  "&.active div:nth-child(3)": {
    transform: "translateX(-50%) rotate(-45deg)",
    top: "50%",
  },
}));

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <StyledButton
      className={isOpen ? "active" : ""}
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <div />
      <div />
      <div />
    </StyledButton>
  );
};

export default HamburgerMenu;
