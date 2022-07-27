// import React, { useEffect, useState } from 'react';


// function App() {

// const [meal, setMeal]=useState([])


// useEffect(()=>{
//   fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
//   .then(response=>response.json())
//   .then(meal=>setMeal(meal))
// },[])



//   return (
//     <div className="App">
      

      
//     </div>
//   );
// }

// export default App;
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
