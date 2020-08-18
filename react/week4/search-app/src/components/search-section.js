import React, { useState, useEffect, useRef } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    (async () => {
      if (!search || search.length < 2) {
        setOptions([]);
        setDisplay(false);
        return;
      }
      const response = await fetch(
        "https://api.github.com/search/users?q=" + search
      );
      const { items } = await response.json();
      if (items.length > 0) {
        setOptions(items);
        setDisplay(true);
      } else {
        setOptions([]);
        setDisplay(false);
      }
    })();
  }, [search]);

  useEffect(() => {
    document.addEventListener("click", handleClickerOutside);
    return () => {
      document.removeEventListener("click", handleClickerOutside);
    };
  }, []);

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div ref={wrapperRef} className="search-container">
      <input
        className="search-input"
        placeholder="Search for user"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <ul className="result-container">
          {options.map(({ id, login }) => (
            <li className="options" key={id} tabIndex="0">
              {login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
