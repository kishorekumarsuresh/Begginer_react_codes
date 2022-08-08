import React, { useState } from "react";

function Hooks(){
    //let v = "Hooks in React"
    const [msg,setMsg] = useState("Hooks in React ")
    let changeState = () => {
        setMsg("Changed the msg")
    }
    return(
        <div>
            <h1 onClick={changeState}> {msg} </h1>
            <button onClick={changeState}> Change </button>
        </div>
    )
}

export default Hooks;