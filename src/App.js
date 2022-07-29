import React ,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Movies from "../src/Pages/Movies"
import Reviews from "../src/Pages/Reviews"
import FrequentlyAsked from "./Pages/FrequentlyAsked";
import Home from "../src/Home/Home";
import "../src/Component.css"

const url = "http://localhost:3000/movies";


function App() {

  const [movies, setMovies] = useState([]);

  const myMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  };
  


  useEffect(myMovies, []);
  console.log(movies)

  const series = movies.map((movie)=>{
     return ( 
      <div className="movieHolder">
       <div>
      <a href={movie.url} target="blank"><img src={movie.image} alt={movie.name} height={400} /></a>
      <div className="movieDetails">
      <h1>Name: {movie.name}</h1>
      <h2>Genre:{movie.genre}</h2>
      <p><strong>Description: </strong><br/>{movie.description}</p>
      <h2>Rating: {movie.rating}</h2>
         

      </div>
      </div>
      </div>
     )
  })

  

  return (
    
    <Router>
      <div>
        <Navbar />
        

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/movies" element={<Movies series={series}/>}></Route>
          <Route exact path="/reviews" element={<Reviews/>}></Route>
          <Route exact path="/frequentlyAskedQuestions" element={<FrequentlyAsked/>}></Route>

        </Routes>
        
      </div>
     

    </Router>
  );
}
export default App;
