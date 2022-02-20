

let numberOffFilms = null;

function start () {
  do {
    numberOffFilms = +prompt("How many movies have you already watched?", "");
 } while (numberOffFilms == "" || numberOffFilms == null || isNaN(numberOffFilms) );
}



let personalMovieDB = {
  count: numberOffFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};



function rememberMyFilms() {
  let a = null;
  let b = null;
  for (let i = 1; i <= 2; i++) {
    a = prompt("One from the last watched movies?"+i, "");
    b = +prompt("How would you rate it?"+i, "");
    if (a == "" || a.length > 50 || a == null || b == "" || b == null ) {
     i--;
    } else {
      personalMovieDB.movies[a] = b;
      a = null;
      b = null;
    }
   
  }
}


function writeYouGenres (obj) {
  let genre;
  for (let i = 1; i <=3; ) {
    genre = prompt(`You favorite genre under the number ${i}`, '');
    if (genre == null || genre == ' ' || !isNaN(genre)) {
      i === i;
    } else {
      obj.genres.push(genre);
      i++;
    }
  }
 }



function detectPersonalLevel () {
    if(personalMovieDB.count >= 0 && personalMovieDB.count < 10 ) {
      document.getElementById('output').innerHTML = "To few movies watched."
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      document.getElementById('output').innerHTML = "You are a classic viewer."
  } else if (personalMovieDB.count >= 30) {
      document.getElementById('output').innerHTML = "You're fucking bad ass."
  } else {
      document.getElementById('output').innerHTML = "ERROR!!!."
  }
}

detectPersonalLevel();


let showMyDB = (obj) => {
  if (obj.hasOwnProperty('private') && obj.private == false) {
    console.log(obj);
  }
}
start ();
rememberMyFilms();
writeYouGenres(personalMovieDB);
showMyDB(personalMovieDB);






 




