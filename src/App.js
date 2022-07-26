import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home"
import Movies from "../src/Pages/Movies"
import Reviews from "../src/Pages/Reviews"
import FrequentlyAsked from "./Pages/FrequentlyAsked";


function App() {
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
