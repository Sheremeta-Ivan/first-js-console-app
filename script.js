let numberOfFilms;

function start() {
  numberOfFilms = Number(prompt("How many films did you watched?", ""));

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = Number(prompt("How many films did you watched?", ""));
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i += 1) {
    const a = prompt("What the latest film do you watch?").trim(),
      b = prompt("How would you rate it?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i -= 1;
    }
  }
}


rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Watched very few films!");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You're a classical watcher!");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are so movie buff!");
  } else {
    console.log("ERROR!!!");
  }
}

detectedPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i += 1) {
    const genre = prompt(`Your favourite genre by number ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

console.log(personalMovieDB);
