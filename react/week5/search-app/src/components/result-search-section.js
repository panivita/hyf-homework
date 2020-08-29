import React, { useContext, useEffect, useRef } from "react";
import { SearchUserContext } from "../Search-user-context";
import { useHistory } from "react-router-dom";

export const ResultSearch = () => {
  const { users, search, err, display, setDisplay } = useContext(
    SearchUserContext
  );
  const wrapperRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickerOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickerOutside);
    };
  });

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  if (!search) return <p className="no-results">No results</p>;

  const goToUserDetailsPage = (username) => {
    history.push("/users/" + username);
  };

  return (
    <div ref={wrapperRef} className="user-container">
      {err && <p>{err}</p>}
      {display && !err ? (
        <ul className="result-container">
          {users && users.length > 0 ? (
            users.map(({ id, login, avatar_url }) => (
              <li
                className="result-search"
                key={id}
                tabIndex="0"
                style={{ outline: "none", cursor: "pointer" }}
                onClick={() => goToUserDetailsPage(login)}
              >
                <img src={avatar_url} className="mini-logo" alt="user logo" />
                <span>{login}</span>
              </li>
            ))
          ) : (
            <li className="users">No results found</li>
          )}
        </ul>
      ) : (
        <li className="loading">Loading...</li>
      )}
    </div>
  );
};
