import React from "react";

//import "./about-page.css";

export const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <section className="main-info">
        <div className="description-about">
          <p>
            {"    "}Hi there and welcome to <b>Github user searcher</b>, a page
            where you can find a github user and get details about the github
            user.
          </p>
        </div>
        <div className="profil-foto">
          <img
            src="https://secure.gravatar.com/avatar/3da283f44646867ed9c7e7e022340300?size=150"
            alt="Victoria Kush"
          />
        </div>
      </section>
    </div>
  );
};
