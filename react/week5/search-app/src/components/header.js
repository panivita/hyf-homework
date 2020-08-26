import React from "react";
import Logo from "../Octocat.jpg";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import { faGithub } from "@fortawesome/free-brands-svg-icons";<i className="fab fa-github"></i>
dom.watch();
library.add(faSearch);

export const Header = () => {
  return (
    <header className="app-header">
      <img src={Logo} alt="octocat github" className="logo-img" />
      <h1>
        Github user searcher
        <i className="fas fa-search"></i>
      </h1>
    </header>
  );
};

export default Header;
