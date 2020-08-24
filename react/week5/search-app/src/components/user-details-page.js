import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchUserContext } from "../Search-user-context";

//import "./booking-page.css";

const UserDetails = ({
  avatar_url,
  name,
  location,
  bio,
  public_repos,
  followers,
  following,
}) => (
  <>
    <div className="container">
      <img src={avatar_url} className="user-logo" alt="user logo"></img>
      <section className="user-container">
        <h2>{name}</h2>
        <p>{location}</p>
        <p>{bio}</p>
        <p>Public repos: {public_repos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
      </section>
    </div>
  </>
);

export const UserDetailsPage = () => {
  const { users } = useContext(SearchUserContext);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/" + users)
      .then((res) => res.json())
      .then(({ items }) => {
        setUserDetails(items);
      })
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className="user-container">
      {userDetails && userDetails.map((user) => <UserDetails key={user.id} {...user} />)}
    </div>
  );
};
