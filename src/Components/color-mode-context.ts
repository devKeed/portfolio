import * as React from "react";

export type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: "light" | "dark";
};

export const ColorModeContext = React.createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: "dark",
});
