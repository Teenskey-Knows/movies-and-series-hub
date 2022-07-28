import React ,{useEffect}from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home"
import Movies from "../src/Pages/Movies"
import Reviews from "../src/Pages/Reviews"
import FrequentlyAsked from "./Pages/FrequentlyAsked";


const url = "http://localhost:3000/movies"

function App() {

  // const [movies,setMovies] = useState([])

  const myMovies = ()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((movies)=>console.log(movies)
   )
  }
  
  
  useEffect(myMovies,[])

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/movies" element={<Movies/>}></Route>
          <Route exact path="/reviews" element={<Reviews/>}></Route>
          <Route exact path="/frequentlyAskedQuestions" element={<FrequentlyAsked/>}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}
export default App;
