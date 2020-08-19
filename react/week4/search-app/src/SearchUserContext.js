import React, { useState, useEffect, createContext } from "react";

const SearchUserContext = createContext();

const SearchUserProvider = (props) => {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      if (!search || search.length < 2) {
        setUsers([]);
        setDisplay(false);
        return;
      }
      const response = await fetch(
        "https://api.github.com/search/users?q=" + search
      );
      const { items } = await response.json();
      
        setUsers(items);
        setDisplay(true);
      
    })();
  }, [search]);

  return (
    <SearchUserContext.Provider
      value={[search, setSearch, users, display, setDisplay]}
    >
      {props.children}
    </SearchUserContext.Provider>
  );
};

export { SearchUserContext, SearchUserProvider };
