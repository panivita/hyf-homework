import React from "react";
import Logo from "./Octocat.jpg";

export const AboutPage = () => {
  return (
    <>
      <section className="about-container">
        <h1>About the project</h1>

        <div className="description-about">
          <h2>What is it</h2>
          <ul>
            <li>
              {"    "}Hi there and welcome to <b>Github user searcher</b>, a
              page where you can find a github user and get details about the
              github user. It provides a simple functionality of permorming
              search results, and user's pages.
            </li>

            <li>
              <b>Github user searcher</b> is a personal project built with React
              to search users and view their profiles on Github.{" "}
            </li>
            <li>
              Every time you type something (every word), the application will
              make a request to GitHub API looking for the typed username and
              respective user information matching the query will be displayed.
              If user not found, an alert message will be displayed which will
              disappear{" "}
            </li>
            <li>
              The profile information will contain avatar, user's GitHub profile
              information such as his status, location, and his membership
              information.
            </li>
          </ul>
          <h2 className="tools">Libraries and tools</h2>
          <section className="tools-container">
            <div>
              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Moment</li>
                <li>Fortawesome icons</li>
              </ul>
            </div>
            <img src={Logo} alt="octocat github" className="about-img" />
          </section>
        </div>
      </section>
      <footer>
        <div className="copyright">© 2020 Victoria Kush</div>
      </footer>
    </>
  );
};
