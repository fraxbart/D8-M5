import React, { useState } from "react";
import Home from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import BookDetails from "./components/BookDetails";
import ContactUs from "./pages/ConctatUs";
import AboutUs from "./components/AboutUs";
import { ThemeContext } from "../src/components/ThemeContext";
import { lightTheme, darkTheme } from "../src/data/Theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ background: theme.background, color: theme.text }}></div>

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/book/:asin" element={<BookDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
