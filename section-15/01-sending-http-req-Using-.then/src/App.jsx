import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((Response) => {
  //       return Response.json();
  //     })
  //     .then((data) => {
  //       const transformedData = data.results.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           openingText: movie.opening_crawl,
  //           releaseDate: movie.release_date,
  //         };
  //       });
  //       setMovies(transformedData);
  //     });
  // }

  // An alternate -- Aysnc Await

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(transformedData);
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{movies && <MovieList movies={movies} />}</section>
    </>
  );
}

export default App;
