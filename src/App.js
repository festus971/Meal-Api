import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import NavBar from "../src/component/NavBar";
import Recipe from "../src/component/Recipe";
import Login from "../src/component/Login";
import Details from "../src/component/Details";
import Home from "./component/Home";

function App() {
  const [meal, setMeal] = useState(null);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  function onDetailsClick(clickedMeal) {
    setMeal(clickedMeal);
  }

  return (
    <div>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<Recipe onDetailsClick={onDetailsClick} />}></Route>
          <Route exact path="/meal/:mealId" element={<Details meal={meal} />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/images" element={<Home />}></Route>
        </Routes>
      </Router>

      {loading ? <PropagateLoader loading={loading} size={10} /> : <div></div>}
    </div>
  );
}

export default App;
