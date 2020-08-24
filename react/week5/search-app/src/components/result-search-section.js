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

  const goToUserDetailsPage = (login) => {
    history.push("/user/" + login);
  };

  return (
    <div ref={wrapperRef} className="user-container">
      {err && <p>{err}</p>}
      {display && !err ? (
        <ul className="result-container">
          {users && users.length > 0 ? (
            users.map(({ id, login }) => (
              <li
                className="users"
                key={id}
                tabIndex="0"
                onClick={() => goToUserDetailsPage(login)}
              >
                {login}
              </li>
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
