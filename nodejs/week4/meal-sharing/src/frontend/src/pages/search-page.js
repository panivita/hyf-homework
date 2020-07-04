import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./search-page.css";

export const Auto = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/api/meals?title=" + search
      );
      const result = await response.json();
      setOptions(result);
    })();
  }, [search]);

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
  const goToCake = (id) => {
    history.push("/cake/" + id);
  };
  return (
    <div ref={wrapperRef} className="search-container">
      <input
        className="search-input"
        onClick={() => {
          if (search) {
            setDisplay(!display);
          }
        }}
        placeholder="Find your favorite cake"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="auto-container">
          {options.map(({ id, title }) => (
            <div
              onClick={() => goToCake(id)}
              className="options"
              key={id}
              tabIndex="0"
            >
              <span>{title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
