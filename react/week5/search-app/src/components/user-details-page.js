import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
);

export const UserDetailsPage = () => {
  const { username } = useParams();
  const [details, setUserDetails] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/" + username)
      .then((res) => res.json())
      .then((items) => {
        setUserDetails(items);
      })
      .catch((err) => console.log(err));
  }, [username]);
  return (
    <>
      {details && <UserDetails />}

      <div className="user-container">
        {details.avatar_url && (
          <img
            src={details.avatar_url}
            className="user-logo"
            alt="user logo"
          ></img>
        )}
        <section className="details-container">
          {details.name && <h2>{details.name}</h2>}
          {details.location && <p>{details.location}</p>}
          {details.bio && <p>{details.bio}</p>}
          {details.public_repos && <p>Public repos: {details.public_repos}</p>}
          {details.followers && <p>Followers: {details.followers}</p>}
          {details.following && <p>Following: {details.following}</p>}
        </section>
      </div>
    </>
  );
};
