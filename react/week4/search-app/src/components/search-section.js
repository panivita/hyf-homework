import React, { useState, useEffect, useRef } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [err, setError] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${search}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => setError(err.message));
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
  return (
    <div ref={wrapperRef} className="search-container">
      <input
        className="search-input"
        onClick={() => {
          if (search) {
            setDisplay(!display);
          }
        }}
        placeholder="Search github user"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <ul className="result-container">
          {options.map(({ id, login }) => (
            <li className="options" key={id} tabIndex="0">
              <span>{login}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
