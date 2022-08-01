import React from 'react'

// function Greet(){
//     return <h1>Hi Kishore</h1>
// }

//const Sweet =() => { <h1> Hello Nitin</h1>}

const hello = ({name,children}) => { 
 return (
    <div>
        <h1>Hey {name} </h1> 
    {children}
    </div>
    
 )
}


export default hello;