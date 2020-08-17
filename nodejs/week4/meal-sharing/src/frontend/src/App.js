import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CakesPage } from "./pages/cakes-page";
import { BookingPage } from "./pages/booking-page";
import { Thanks } from "./pages/thank-page";
import { Auto } from "./pages/search-page";
import { RecipesPage } from "./pages/recipes-page";
import Background from "./img/background.jpg";
import Logo from "./img/homemade-logo.png";

import "./reset.css";
import "./App.css";
import { AboutPage } from "./pages/about-page";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-container">
          <nav className="main-menu">
            <div className="left-menu">
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <Link to="/About">About</Link>
              </p>
            </div>
            <div className="center-menu">
              <a href="/">
                <img src={Logo} alt="homemade with love" />
              </a>
            </div>
            <div className="right-menu">
              <p>
                <Link to="/cakes">Cakes</Link>
              </p>
              <p>
                <Link to="/Recipes">Blog</Link>
              </p>
            </div>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <img src={Background} alt="capcake pattern" />
            <Auto />
          </Route>
          <Route path="/cakes">
            <CakesPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/cake/:id">
            <BookingPage />
          </Route>
          <Route path="/thank">
            <Thanks />
          </Route>
          <Route path="/Recipes">
            <RecipesPage />
          </Route>
        </Switch>

        <footer>
          <section className="copyright">© 2020 Victoria Kush</section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
