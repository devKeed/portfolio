import { Typography, useTheme } from "@mui/material";

const MyButton = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: "12px 24px",
        borderRadius: "8px",
        color:  theme.palette.mode === "dark" ? "#000" : "#fff",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
      }}
    >
      <Typography color={theme.palette.mode === "dark" ? "#000" : "#fff"}>{text}</Typography>
    </div>
  );
};

export default MyButton;
