import React from "react";

function ChildComponent(props){
    return (
        <div>
        <button  onClick={()=> props.greetHandler("Kaviya", "Randon")}> Greet parent</button>
        </div>
    )
}

export default ChildComponent