const numberOfFilms = Number(prompt("How many films do you watched?", ""));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("What the latest film do you watch?"),
  b = prompt("How would you rate it?"),
  c = prompt("What the latest film do you watch?"),
  d = prompt("How would you rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);