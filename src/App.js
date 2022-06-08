import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import { StrictMode } from "react";
import { useState } from "react";

const App = () => {
  const theme = useState("blue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
