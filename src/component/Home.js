import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const BREAKFAST_MEALS = "https://www.themealdb.com/api/json/v1/1/search.php?f=e"

export default function Home(){

    const [meals, setMeals] = useState([])

    // load items from internet
    const mealFetcher = () => {
        fetch(BREAKFAST_MEALS)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.meals)
            })
    }

    useEffect(
        mealFetcher, []
    )

    let mealCards = meals.map((meal) => (<MealCard mealName={meal.strMeal} mealThumbnail={meal.strMealThumb} mealId={meal.idMeal} key={meal.idMeal}/>))

    return(
        <div className="container">
            Home
            <div className="row">
                {mealCards}
            </div>
            
        </div>
    )
}