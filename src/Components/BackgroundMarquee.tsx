import { useMediaQuery, useTheme } from "@mui/material";

export const BackgroundMarquee = ({text}: {text: string}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Add CSS keyframes for marquee
  const marqueeStyle = `
    @keyframes marqueeScroll {
      0% {
        transform: translateX(-50%) translateY(-50%);
      }
      100% {
        transform: translateX(-100%) translateY(-50%);
      }
    }
  `;

  return (
    <>
      {/* Inject CSS for marquee animation */}
      <style>{marqueeStyle}</style>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "translateY(-50%)",
          zIndex: -1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            fontSize: isMobile ? "15rem" : "35rem",
            fontWeight: 900,
            color:
              theme.palette.mode === "dark"
                ? "rgba(255, 255, 255, 0.02)"
                : "rgba(0, 0, 0, 0.03)",
            whiteSpace: "nowrap",
            fontFamily: "PPValve-Medium, sans-serif",
            animation: "marqueeScroll 360s linear infinite",
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
};
