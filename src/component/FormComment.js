import React,{useState} from "react";

function FormComments(){
const[values,setValues]=useState({
    reviews:"",
    Suggestions:""
})

const handleformreviews=(event)=>{
    setValues({...values,reviews:event.target.value})
}
const handleformsuggestions=(event)=>{
    setValues({...values,Suggestions:event.target.value})
}

    return(
        <div>
            <input value={values} placeholder="reviews" name="reviews" onChange={handleformreviews}></input>
            <input value={values} placeholder="suggestions" name="suggestions" onChange={handleformsuggestions}></input>
        </div>
    )
}
export default FormComments;