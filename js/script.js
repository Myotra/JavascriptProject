


const numberOfFilms = +prompt('How many films have you\'ve seen?', '');

let personalMovieDB = {
	count: numberOfFilms,
    movies: {},
	actors: {},
	genres: [],
	private: false
};

const lastMovie1 = prompt('What\'s the your one of last watched movie ?', ''),
      rate1 = prompt('What\'s the rate you can give to this movie ?', ''),
      lastMovie2 = prompt('What\'s the your one of last watched movie ?', ''),
      rate2 = prompt('What\'s the rate you can give to this movie ?', '');


personalMovieDB.movies[lastMovie1] = rate1;
personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);
