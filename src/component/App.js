import React, { useState,useEffect } from "react";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Details from "./Details";
import {PropagateLoader} from "react-spinners";


function App() {
  const[meal,setMeal]=useState(null)

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
   setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, []);

  function onDetailsClick(clickedMeal){
    setMeal(clickedMeal)
    

  }

  return (
    <div>
    <Router>
      <div>
        <NavBar/>
      </div>

      <Routes>
        <Route exact path="/" element={<Home onDetailsClick={onDetailsClick}/>}></Route>
        <Route exact path="/meal/:mealId" element={<Details meal={meal}/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
      </Routes>

    </Router>
   
    {

loading ? <PropagateLoader  loading={loading}  size={10} />
  :<div>

</div>
  }
</div>
  );
  
  
}

export default App;
