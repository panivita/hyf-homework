import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPortrait,
  faUserClock,
  faSyncAlt,
  faBuilding,
  faLink
} from "@fortawesome/free-solid-svg-icons";
dom.watch();
library.add(faMapMarkerAlt, faPortrait, faUserClock, faSyncAlt, faBuilding, faLink);

const UserDetails = ({
  avatar_url,
  name,
  login,
  location,
  bio,
  blog,
  company,
  created_at,
  updated_at,
  public_repos,
  followers,
  following,
}) => (
  <>
    <div className="container">
      <section className="user-details">
        <img src={avatar_url} className="user-logo" alt="user logo"></img>
        <div className="user-repos">
          <p>Repos: {public_repos}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </section>
      <section className="user-details-container">
        {name !== null ? <h2>{name}</h2> : <h2>{login}</h2>}
        {location !== null ? (
          <p>
            <i className="fas fa-map-marker-alt"></i> {location}
          </p>
        ) : (
          <></>
        )}
        {bio !== null ? (
          <p>
            <i className="fas fa-portrait"></i> {bio}
          </p>
        ) : (
          <></>
        )}
        {company !== null ? (
          <p>
            <i className="fas fa-building"></i> {company}
          </p>
        ) : (
          <></>
        )}
        {blog !== "" ? (
          <a href={blog} target = "_blank" >
            <i className="fas fa-link"></i> {blog}
          </a>
        ) : (
          <></>
        )}
        <p>
          <i className="fas fa-user-clock"></i>Member since:{" "}
          <Moment format="D MMM YYYY" withTitle>
            {created_at}
          </Moment>
        </p>
        <p>
          <i className="fas fa-sync-alt"></i>Last update:{" "}
          <Moment fromNow>{updated_at}</Moment>
        </p>
      </section>
    </div>
    <footer>
      <div className="copyright">© 2020 Victoria Kush</div>
    </footer>
  </>
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
  if (details) {
    return <UserDetails {...details} />;
  } else {
    return null;
  }
};
