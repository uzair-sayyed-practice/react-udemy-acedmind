import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
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

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again later.");
      }
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
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (isLoading) {
    content = (
      <div className='loader-container'>
        <div className='spinner'></div>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {/* Variable Example  */}
        {content}

        {/* Either we can use this or we can use vairable and as per the if condition that variable will change its content  */}
        {/* {movies && <MovieList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && (
          <div className='loader-container'>
            <div className='spinner'></div>
          </div>
        )} */}
      </section>
    </>
  );
}

export default App;
