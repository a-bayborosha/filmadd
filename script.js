console.log("TEST");

const numberOffFilms = +prompt("How many movies have you already watched?", "");

let personalMovieDB = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//personalMovieDB.movies = { key1: "value1", key2: "value2" };
let a = null;
let b = null;

for (let i = 1; i <= 2; i++) {
  a = prompt("One from the last watched movies?", "");
  b = prompt("How would you rate it?", "");
  personalMovieDB.movies[a] = b;
  a = null;
  b = null;
}

console.log(personalMovieDB);
document.getElementById("output").innerHTML = JSON.stringify(
  personalMovieDB.movies
);
