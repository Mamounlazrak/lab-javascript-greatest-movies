const movies = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map(element => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaSpielbergMovies = movies.filter(element => (element.director === "Steven Spielberg") && (element.genre.includes('Drama')));
  return dramaSpielbergMovies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  } 
  let sum = movies.reduce(function(previousValue, currentValue) {
      if(typeof currentValue.score != 'number') {
        return previousValue + 0;
      } else {
        return previousValue + currentValue.score;
      }
    }, 0)
    console.log(sum); 
  return Math.round((sum / movies.length) * 100) / 100;
}
console.log (scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedByYear = movies.slice();
  sortedByYear.sort(function(a,b) {
    if (a.year < b.year) return -1; // a is less than b
    if (a.year > b.year) return 1; // a is greater than b
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
    }
  })
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let sortedTitles = movies.slice();
  sortedTitles.sort(function (a,b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    if (a.title === a.title) return 0;
  })
  return sortedTitles.slice(0,20).map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
