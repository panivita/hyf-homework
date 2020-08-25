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
    document.addEventListener("click", handleClickerOutside);
    return () => {
      document.removeEventListener("click", handleClickerOutside);
    };
  });

  const handleClickerOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  if (!search) return <li className="no-results">No results</li>;

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
              <section className="result-search">
                <img
                  src={avatar_url}
                  className="mini-logo"
                  alt="user logo"
                ></img>
                <li
                  className="users"
                  key={id}
                  tabIndex="0"
                  style={{ outline: "none" }}
                  onClick={() => goToUserDetailsPage(login)}
                >
                  {login}
                </li>
              </section>
            ))
          ) : (
            <li className="users">No results found</li>
          )}
        </ul>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};
