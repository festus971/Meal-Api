import React,{useState} from "react";

function FormComments(){
const[values,setValues]=useState({
    reviews:"" 
})

const handleformreviews=(event)=>{
    setValues({...values,reviews:event.target.value})
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
            <input type="text" value={values} name="comment." placeholder="enter your reviews" onChange={handleformreviews}/>
        </div>
    )
}
export default FormComments;