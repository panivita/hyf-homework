//3 classmates github username that I want to show repositories for.
const user1 = "panivita";
const user2 = "gebremedhin85";
const user3 = "LucyChyzhova";
const url = `https://api.github.com/search/repositories?`;
const body = document.querySelector("body");

//Lets use the github api to see what repositories different users have.
const fetchUserRepos = (user) =>
  fetch(`${url}q=user:${user}`)
    .then((result) => result.json())
    .then((res) => res.items);

const getGithubUser1 = fetchUserRepos(user1);
const getGithubUser2 = fetchUserRepos(user2);
const getGithubUser3 = fetchUserRepos(user3);

//Render the fullname of the repo, url of the repo, and the owner of the repo.
const render = (repos) => {
  const divUser = document.createElement("div");
  body.appendChild(divUser);
  const userName = document.createElement("h2");
  divUser.appendChild(userName);
  userName.innerHTML = `${repos[0].owner.login}'s repositories`;
  repos.forEach((result) => {
    const ulRepos = document.createElement("ul");
    divUser.appendChild(ulRepos);
    ulRepos.innerHTML = `
    <li><b>Fullname of the repositories:</b> ${result.full_name}</li>
    <li><b>Url of the repositories:</b> ${result.url}</li>
    <li><b>${result.name}:</b> ${result.url}</li>`;
  });
};

//Fetch all the 3 classmates repositories at the same time using Promise.all
Promise.all([getGithubUser1, getGithubUser2, getGithubUser3]).then(
  (values) => {
    values.forEach((data) => render(data));
  }
);
