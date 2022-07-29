import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const BREAKFAST = "https://stormy-gorge-09324.herokuapp.com/meals"

export default function Home({onDetailsClick}){

    const [meals, setMeals] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [counter, setCounter] = useState(0)


    const handleSearch = (event) => {
        setSearchItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCounter(counter + 1)
    }

   
    const Fetcher = () => {
        fetch(BREAKFAST)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data)
                
            })
            .catch(error=>console.log(error))

    }

    useEffect(
        Fetcher, []
    )
    console.log(searchItem)

    
    const mealCards = meals.filter((meal) =>meal.strMeal.toLowerCase().includes(searchItem.toLowerCase())).map((meal) => (
    <MealCard mealName={meal.strMeal}
         mealThumbnail={meal.strMealThumb} meal={meal} onDetailsClick={onDetailsClick} mealId={meal.idMeal} key={meal.idMeal}/>
    ))

    return(
        <div className="container">
             Home
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="search" className="form-label">SEARCH MEAL</label>
                    <input type="text" className="form-control" id="search" name="search" value={searchItem} onChange={handleSearch}/>
                </div>
                </form>
            <div className="row">
                {mealCards}
            </div>
            
        </div>
    )
}