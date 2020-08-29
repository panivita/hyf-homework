import React, { useContext } from "react";
import { SearchUserContext } from "../Search-user-context";

export const Search = () => {
  const { search, setSearch } = useContext(SearchUserContext);

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search for user"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};
