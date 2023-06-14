const numberOfFilms = Number(prompt("How many films did you watched?", ""));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i += 1) {
  const a = prompt("What the latest film do you watch?"),
    b = prompt("How would you rate it?");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i -= 1;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Watched very few films!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("You're a classical watcher!");
} else if (personalMovieDB.count >= 30) {
  console.log("You are so movie buff!");
} else {
  console.log("ERROR!!!");
}

console.log(personalMovieDB);
