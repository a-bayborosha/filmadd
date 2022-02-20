//let numberOffFilms;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function () {
   
    do {
      this.count = +prompt("How many movies have you already watched?", "");
   } while (this.count == "" || this.count == null || isNaN(this.count) );
  },
  rememberMyFilms: function () {
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
  },
  writeYouGenres: function () {
    let genre;
    for (let i = 1; i <=3; ) {
      genre = prompt(`You favorite genre under the number ${i}`, '');
      if (genre == null || genre == ' ' || !isNaN(genre)) {
        console.log("Not correct")
        i === i;
      } else {
        this.genres.push(genre);
        i++;
      }
    }
   
    this.genres.forEach((genre, i) => {
      console.log(`Любимый жанр # ${i + 1} - это ${genre}`);
    })
   },
   detectPersonalLevel: function () {
    if(this.count >= 0 && this.count < 10 ) {
      
      document.getElementById('output').innerHTML = "To few movies watched."
  } else if (this.count >= 10 && this.count <= 30) {
    
      document.getElementById('output').innerHTML = "You are a classic viewer."
  } else if (this.count >= 30) {
    
      document.getElementById('output').innerHTML = "You're fucking bad ass."
  } else {
    
      document.getElementById('output').innerHTML = "ERROR!!!."
  }
},
  showMyDB: function () {
    if (this.hasOwnProperty('private') && this.private == false) {
      console.log(this);
    }
    console.log(this.private);
  },
  toggleVisibleMyDB: function() {
    if (this.private) {
      this.private = false;
    } else {
      this.private = true;
    }
     
  }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYouGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();







 




