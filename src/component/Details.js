
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MEAL = "https://www.themealdb.com/api/json/v1/1/search.php?f=e"

export default function Details(){

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [instructions, setInstructions] = useState("")

    let {mealId} = useParams()

    
    const [actualSearch] = MEAL + mealId

    useEffect( () => {
        fetch(actualSearch)
            .then((response) => response.json())
            .then((data) => {
                const meal = data.meals[0]

                setTitle(meal.strMeal)
                setCategory(meal.strCategory)
                setInstructions(meal.strInstructions)
                setImage(meal.strMealThumb)
                
            })
    }, [actualSearch])

    return(
        <div className="container">
            <center>
                <img src={image} alt="" style={{height: 200 + 'px', width: 200 + 'px',}} />
                <h4>{title}</h4>
                <h6 className="badge bg-success">{category}</h6>
                <p>{instructions}</p>
            </center>
        </div>
    )

}

