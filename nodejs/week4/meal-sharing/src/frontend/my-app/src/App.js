import React, { useState, useEffect } from "react";
import Background from "./img/background.jpg";
import Logo from "./img/homemade-logo.png";

import "./App.css";
import "./main.css";
import "./reset.css";

const Meal = ({ url, title, description }) => (
  <div>
    <img src={url}></img>
    <h1>{title}</h1>
  </div>
);

const Meals = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/meals");
      const result = await response.json();
      setMeals(result);
    })();
  }, []);
  return <ul>{meals && meals.map((m) => <Meal key={m.id} {...m} />)}</ul>;
  // return <pre>{JSON.stringify(meals, null, 2)}</pre>;
};

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <nav className="main-menu">
          <div className="left-menu">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About</a>
            </p>
          </div>
          <div className="center-menu">
            <a href="#home">
              <img src={Logo} />
            </a>
          </div>
          <div className="right-menu">
            <p>
              <a href="#meals"></a>Cakes
            </p>
            <p>
              <a href="#meals"></a>Recipes
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
      <Meals />
      <footer>
        <section className="copyright">© 2020 Victoria Kush</section>
      </footer>
    </div>
  );
}

export default App;
