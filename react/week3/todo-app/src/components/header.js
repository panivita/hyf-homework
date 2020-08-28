import React from "react";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
dom.watch();
library.add(faClipboardList);

export const Header = () => {
  return (
    <header className="App-header">
      <h1>
        <i className="fas fa-clipboard-list"></i>Todo List
      </h1>
    </header>
  );
};

export default Header;
