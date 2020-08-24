import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AboutPage } from "./components/about-page";
import { Header } from "./components/header";
import { Search } from "./components/search-section";
import { ResultSearch } from "./components/result-search-section";
import { SearchUserProvider } from "./Search-user-context";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <Link to="/About">About</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <SearchUserProvider>
            <Header />
            <Search />
            <ResultSearch />
          </SearchUserProvider>
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
