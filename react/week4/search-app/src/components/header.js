import React from "react";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
dom.watch();
library.add(faSearch, faGithub);

export const Header = () => {
  return (
    <header className="app-header">
      <h1>
      <i className="fab fa-github"></i>Github user searcher<i className="fas fa-search"></i>
      </h1>
    </header>
  );
};

export default Header;