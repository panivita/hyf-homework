const badMoviesList = document.getElementById("bad-movies");
const badMoviesYearsList = document.getElementById("bad-movies-years");
const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
const movies = fetch(url)
  .then((res) => res.json())
  .then((movies) => {
    // Create an array of bad rating
    const badMovies = movies.filter((m) => m.rating < 4);
    // Create an array of the bad movies
    const badMoviesTitles = badMovies.map((m) => {
      return `<li>${m.title}</li>`;
    });
    badMoviesList.innerHTML = `List of bad movies: ${badMoviesTitles.join("")}`;
    // Create an array of bad rating movies since year 2000
    const badMoviesYears = badMovies.filter((m) => m.year >= 2000);
    // Create an array of the bad movies since year 2000
    badMoviesYearsTitles = badMoviesYears.map((m) => {
      return `<li>${m.title}</li>`;
    });
    badMoviesYearsList.innerHTML = `List of bad movies since 2000 year: 
    ${badMoviesYearsTitles.join("")}`;
  })
  .catch((err) => console.log(err));

// The same exercise with the use  async await
const getBadMovies = async () => {
  const response = await fetch(url);
  const movies = await response.json();
  // Create an array of bad rating of the movies
  const badMovies = movies.filter((m) => m.rating < 4);
  // Create an array of the bad movies
  const badMoviesTitles = badMovies.map((m) => m.title);
  // Create an array of bad rating of the movies since year 2000
  const badMoviesYears = badMovies.filter((m) => m.year >= 2000);
  // Create an array of the bad movies since year 2000
  const badMoviesYearsTitles = badMoviesYears.map((m) => m.title);
  console.log(badMoviesTitles);
  console.log(badMoviesYearsTitles);
};

try {
  console.log(getBadMovies());
} catch (err) {
  console.log(err);
}
