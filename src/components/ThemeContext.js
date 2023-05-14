import React from "react";
import { lightTheme, darkTheme } from "../data/Theme";

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export default ThemeContext
