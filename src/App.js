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
  // const {id, name, genre,description, rating,image,url} =movies
  // console.log("Number 1",movies)

  const [movies, setMovies] = useState([]);
  const [readMore,setReadMore]= useState(true)



  function myToggle(){
    setReadMore(!readMore)
  }
  // const [isReadMore,setReadMore]=useState(false)

// const toggleBtn =()=>{
//   setReadMore(prevState => !prevState)
// }
  const myMovies = () => {
    fetch(url)
      .then((response) => response.json())
      .then((movies) => setMovies(movies));
  };
 
  
  //Function for handling Delete
  // function handleDelete(){
  //   fetch(`url/${id}`,{
  //     method: "DELETE"
  //   })

  // }



  
  useEffect(myMovies, []);
  console.log(movies)

  const series = movies.map((movie)=>{
     return ( 
      <div className="movieHolder">
       <div>
      <a href={movie.url} target="blank"><img src={movie.image} alt={movie.name} height={400} /></a>
      <div className="movieDetails">
      <h1 className="h1Name"><span>Name:</span> <br />{movie.name}</h1>
      <h2 className="h2Genre"><span>Genre:</span><br />{movie.genre}</h2>
     
      <h2 className="h2Rating"><span><span>Rating:</span></span> <br />{movie.rating}</h2>
      <p className="pDescription"><span>Description: </span><br />
      {readMore ? movie.description.slice(0,200) : movie.description}
      <button onClick={myToggle}>{readMore? "Read More": "Read Less"}</button>
      </p>
      <br />
     
         

      </div>
      </div>
      </div>
     )
  })
  



    //function for adding my movies
    function addingMovies(newMovies){
      const updatedMovies = [...movies,newMovies]
      setMovies(updatedMovies)
    }
  

  return (
    
    <Router>
      <div>
        <Navbar />
        

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/movies" element={<Movies series={series} onAddMovies={addingMovies}/>}></Route>
          <Route exact path="/reviews" element={<Reviews/>}></Route>
          <Route exact path="/frequentlyAskedQuestions" element={<FrequentlyAsked/>}></Route>

        </Routes>
        
      </div>
     

    </Router>
  );
}
export default App;
