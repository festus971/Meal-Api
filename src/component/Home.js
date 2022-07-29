import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const BREAKFAST = "https://stormy-gorge-09324.herokuapp.com/meals"

export default function Home({onDetailsClick}){

    const [meals, setMeals] = useState([])

   
    const Fetcher = () => {
        fetch(BREAKFAST)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data)
                console.log(data)
            })
            .catch(error=>console.log(error))

    }

    useEffect(
        Fetcher, []
    )
    console.log(meals)


    const mealCards = meals.map((meal) => (
    <MealCard mealName={meal.strMeal}
         mealThumbnail={meal.strMealThumb} meal={meal} onDetailsClick={onDetailsClick} mealId={meal.idMeal} key={meal.idMeal}/>
    ))

    return(
        <div className="container">
            Home
            <div className="row">
                {mealCards}
            </div>
            
        </div>
    )
}