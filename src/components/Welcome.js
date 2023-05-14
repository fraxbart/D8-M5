import "../Styles/welcome.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Welcome = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 className="text-center mb-4 mt-5">EpiBooks</h1>
    </div>
  );
};

export default Welcome;
