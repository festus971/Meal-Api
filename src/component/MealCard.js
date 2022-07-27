import React from "react";

import { Link } from "react-router-dom";

export default function MealCard({mealName, mealThumbnail, mealId,onDetailsClick,meal}){

    function handleOnClick(){
        onDetailsClick(meal)

    }


    return (
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={mealThumbnail} className="card-img-top" alt={mealName}/>
            <div className="card-body">
                <h5 className="card-title">{mealName}</h5>
                <Link to={"/meal/"+mealId}onClick={handleOnClick} className="btn btn-primary">DETAILS</Link>
            </div>
        </div>
    )

}