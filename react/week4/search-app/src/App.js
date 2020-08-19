import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Search } from "./components/search-section";
import { ResultSearch } from "./components/result-search-section";
import { SearchUserProvider } from "./SearchUserContext";

const App = () => {
  return (
      <SearchUserProvider>
        <Header />
        <Search />
        <ResultSearch />
      </SearchUserProvider>
  );
};

export default App;
