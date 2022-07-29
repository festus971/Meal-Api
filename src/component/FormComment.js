import React,{useState} from "react";

function FormComments(){
const[values,setValues]=useState({
    reviews:""})

const handleformreviews=(event)=>{
    setValues({...values,reviews:event.target.value})
}


    return(
        <div>
           
        </div>
    )
}
export default FormComments;