import React, { useState, useEffect, useRef } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${search}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => console.log(err));
  }, [search]);

  useEffect(() => {
    document.addEventListener("keyup", handleClickerOutside);
    return () => {
      document.removeEventListener("keyup", handleClickerOutside);
    };
  }, []);

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const setSearchUser = (user) => {
    setSearch(user);
    setDisplay(false);
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
        placeholder="Search for user"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <ul className="result-container">
          {options.items.map(({ id, login }) => (
            <li
              className="options"
              key={id}
              tabIndex="0"
              onClick={() => setSearchUser({ login })}
            >
              {login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
