import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

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
    setIsLoading(true);
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
    setIsLoading(false);
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {movies && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
        {isLoading && (
          <div className='loader-container'>
            <div className='spinner'></div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
