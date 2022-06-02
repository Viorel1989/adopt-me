import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />}></Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
