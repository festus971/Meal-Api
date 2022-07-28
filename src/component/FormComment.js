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

// fetch("https://stormy-gorge-09324.herokuapp.com/meals/",{
//           method: "POST",
//           headers:{
//             "Content-Type": "application/json",
//           },
//           body:JSON.stringify,
//         })
//         .then(res => res.json())
//         .then(values=>console.log(values)
            
//         )
      





    return(
        <div>
            <input value={values} placeholder="reviews" name="reviews" onChange={handleformreviews}></input>
            <input value={values} placeholder="suggestions" name="suggestions" onChange={handleformsuggestions}></input>
        </div>
    )
}
export default FormComments;