import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CakesPage } from "./pages/cakes-page";
import { BookingPage } from "./pages/booking-page";

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
                <a href="#recipes">Recipes</a>
              </p>
            </div>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <img src={Background} alt="capcake pattern" />
            <div className="center-input">
              <input
                className="search-input"
                placeholder="Find your favorite cake"
              ></input>
            </div>
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
        </Switch>

        <footer>
          <section className="copyright">© 2020 Victoria Kush</section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
