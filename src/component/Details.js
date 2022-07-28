
import React from "react";
import "./style/Details.css"
import FormComments from "./FormComment";
export default function Details({meal}){


    return(
        <div className="container">
           {meal? <center>
                <img src={meal.strMealThumb} alt="" style={{height: 200 + 'px', width: 200 + 'px',}} />
                <h4>{meal.strMeal}</h4>
                <h6 className="badge bg-success">{meal.strCategory}</h6>
                <p>{meal.strInstructions}</p>
            </center>:null}
            <FormComments/>
        </div>
    )

}

