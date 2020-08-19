import React, { useContext, useEffect, useRef } from "react";
import { SearchUserContext } from "../SearchUserContext";

export const ResultSearch = () => {
  const [display, setDisplay, users] = useContext(SearchUserContext);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickerOutside);
    return () => {
      document.removeEventListener("click", handleClickerOutside);
    };
  });

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay();
    }
  };

  return (
    <div ref={wrapperRef} className="user-container">
      {display && (
        <ul className="result-container">
          {users && users.length > 0 ? (
            users.map(({ id, login }) => (
              <li className="users" key={id} tabIndex="0">
                {login}
              </li>
            ))
          ) : (
            <li className="users">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};
