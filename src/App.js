import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
