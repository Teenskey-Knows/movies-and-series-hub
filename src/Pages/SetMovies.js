import React, { useState, useEffect } from "react";
import Movies from "./Movies";

// const url = "http://localhost:3000/movies";
console.log("Set Movies")

function SetMovies() {
  // const [movies, setMovies] = useState([]);

  // const myMovies = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((movies) => setMovies(movies));
  // };
  


  // useEffect(myMovies, []);
  // console.log("yoow",movies)

  return (
    <div>
      {/* {movies.map((myMovies2) => {
        return (
          <Movies
            key={myMovies2.id}
            name={myMovies2.name}
            image={myMovies2.image}
            genre={myMovies2.genre}
            description={myMovies2.description}
            url={myMovies2.url}
            rating={myMovies2.rating}
          />
        );
      })} */}
    </div>
  );
}

export default SetMovies;
