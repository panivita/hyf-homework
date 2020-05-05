// Create an array of bad movies
// Create an array of the bad movies since year 2000

const badMoviesList = document.getElementById("bad-movies");
const badMoviesSinceList = document.getElementById("bad-movies-years");
const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const movies = fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    const badMovies = movies
      .filter((m) => m.rating < 4)
      .map((m) => `<li>${m.title}</li>`);
    badMoviesList.innerHTML = `List of bad movies: ${badMovies.join("")}`;
    const badMoviesSince = movies
      .filter((m) => m.rating < 4 && m.year >= 2000)
      .map((m) => `<li>${m.title}</li>`);
    badMoviesSinceList.innerHTML = `List of bad movies since 2000 year: 
    ${badMoviesSince.join("")}`;
  })
  .catch((err) => console.log(err));

// The same exercise with the use  async await
const getBadMovies = async () => {
  const response = await fetch(url);
  const movies = await response.json();
  const badMovies = movies.filter((m) => m.rating < 4).map((m) => m.title);
  const badMoviesSince = movies
    .filter((m) => m.rating < 4 && m.year >= 2000)
    .map((m) => m.title);
  return { badMovies, badMoviesSince };
};

const badMoviesFunc = async () => {
  try {
    const { badMovies, badMoviesSince } = await getBadMovies();
    console.log(badMovies);
    console.log(badMoviesSince);
  } catch (err) {
    console.log(err);
  }
};

badMoviesFunc();
