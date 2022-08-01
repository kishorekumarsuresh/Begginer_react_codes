import React from "react";

function FunctionClick(){
    const clickHandler = ()=> console.log("clickHandler");
    return (
        <div>
            <button onClick={()=>{console.log("clickHandler")}}>Click</button>
        </div>
    
    )
}

export default FunctionClick