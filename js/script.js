"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ("Один из последниз просмотренных фильмов?", ""),
          b = prompt ("На сколько оцените его?", "");
    
    if (a != null && b != null && a!= '' && b!= '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies [a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Проосмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
    console.log('Вы классный зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
