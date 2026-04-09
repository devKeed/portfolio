import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"mark" | "name">("mark");

  useEffect(() => {
    const phaseTimer = window.setTimeout(() => {
      setPhase("name");
    }, 950);

    const completeTimer = window.setTimeout(() => {
      onLoadingComplete();
    }, 2100);

    return () => {
      window.clearTimeout(phaseTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-screen__content">
        <div className={`loading-mark${phase === "name" ? " is-condensed" : ""}`}>
          <img src="/images/fa.svg" alt="" />
        </div>
        <p className={`loading-name${phase === "name" ? " is-visible" : ""}`}>
          Fortune Adebiyi
        </p>
      </div>
      <div className="loading-bar">
        <span />
      </div>
    </div>
  );
};

export default LoadingScreen;
