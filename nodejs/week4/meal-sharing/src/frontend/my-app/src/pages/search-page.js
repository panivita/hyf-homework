import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./search-page.css";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/meals");
      const result = await response.json();
      setMeals(result);
    })();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickerOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickerOutside);
    };
  }, []);

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  const setCake = (cake) => {
    setSearch(cake);
    setDisplay(false);
  };
  return (
    <div ref={wrapperRef} className="search-container">
      <input
        className="search-input"
        onClick={() => setDisplay(!display)}
        placeholder="Find your favorite cake"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="auto-container">
          {options.map((v, i) => {
            return (
              <div
                onClick={() => setCake(v.title)}
                className="options"
                key={i}
                tabIndex="0"
              >
                <span>{v.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
