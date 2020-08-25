import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPortrait,
  faUserClock,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
//import { faGithub } from "@fortawesome/free-brands-svg-icons";<i className="fab fa-github"></i>
dom.watch();
library.add(faMapMarkerAlt, faPortrait, faUserClock, faSyncAlt);

const UserDetails = ({
  avatar_url,
  name,
  location,
  bio,
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
        <h2>{name}</h2>
        <p>
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
        <p>
          <i className="fas fa-portrait"></i> {bio}
        </p>
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
