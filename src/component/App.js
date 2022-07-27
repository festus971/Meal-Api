import React, { useState } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Search from "./Search";
import Details from "./Details";

function App() {
  const[meal,setMeal]=useState(null)

  function onDetailsClick(clickedMeal){
    setMeal(clickedMeal)
    

  }

  return (
    <Router>
      <div>
        <NavBar/>
      </div>

      <Routes>
        <Route exact path="/" element={<Home onDetailsClick={onDetailsClick}/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
        <Route exact path="/meal/:mealId" element={<Details meal={meal}/>}></Route>
      </Routes>

    </Router>
   
  );
}

export default App;
