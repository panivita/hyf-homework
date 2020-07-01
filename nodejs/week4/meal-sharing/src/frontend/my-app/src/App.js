import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CakesPage } from "./pages/cakes-page";

import Background from "./img/background.jpg";
import Logo from "./img/homemade-logo.png";

import "./reset.css";
import "./App.css";

const Cake = ({ url, title, description, max_reservations, price }) => (
  <div className="page-cake">
    <section className="container-cake">
      <img src={url} className="img-cake"></img>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <b>Guests:</b> {max_reservations}
      </p>
      <p>
        <b>Price:</b> {price} dkk
      </p>
    </section>
    <section className="review-container">
      <h1>Review</h1>
    </section>
    <section className="form-container">
      <form class="fields">
        <input type="text" id="firstName" placeholder="First Name"></input>
        <input type="text" id="lastName" placeholder="Last Name"></input>
        <input type="text" id="email" placeholder="Email"></input>
        <input type="text" id="phone" placeholder="Phone"></input>
        <input
          type="number"
          id="number-guests"
          placeholder="Number of guests"
        ></input>
        <button id="submit" className="submit">
          Submit
        </button>
      </form>
    </section>
  </div>
);
// <p>{review.description}</p>
// <p>{review.stars}</p>
const CakeById = ({ id }) => {
  const [meals, setMeals] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/meals/" + id);
      const result = await response.json();
      setMeals(result);
    })();
  }, [id]);
  return (
    <div className="cakes">
      {meals && meals.map((m) => <Cake key={m.id} {...m} />)}
    </div>
  );
};

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
                <img src={Logo} />
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
          <img src={Background} alt="capcake pattern" />
          <div className="header-center">
            <input
              className="search-input"
              placeholder="Find your favorite cake"
            ></input>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <h1>Home sweet home</h1>
          </Route>
          <Route path="/cakes">
            <CakesPage />
          </Route>
          <Route path="/about">
            <h1>About my self</h1>
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
