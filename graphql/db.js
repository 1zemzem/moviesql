// let movies = [
//   {
//     id: 1,
//     name: "Властелин колец",
//     score: 8,
//   },
//   {
//     id: 2,
//     name: "Один дома",
//     score: 7,
//   },
//   {
//     id: 3,
//     name: "Джентельмены",
//     score: 9,
//   },
//   {
//     id: 4,
//     name: "Звездные войны",
//     score: 6,
//   },
//   {
//     id: 5,
//     name: "Обитель зла",
//     score: 5,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.find((movie) => id == movie.id);
//   return filteredMovies;
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.lenght > cleanedMovies.lenght) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie =(name, score) => {
// const newMovie = {
//   id: movies.lenght + 1,
//   name,
//   score,
// }
// movies.push(newMovie);
// return newMovie;
// }

 import fetch from 'node-fetch';

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
let REQUEST_URL = API_URL;
if (limit > 0) {
  REQUEST_URL +=`limit=${limit}`;
}
  if (rating > 0) {
    REQUEST_URL +=`&minimum_rating=${rating}`;
}
  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);

}
  
