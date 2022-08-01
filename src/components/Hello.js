import React from "react";
/* BY USING JSX
// const Hello = () => {
//     return (
//         <div>
//             <h1> Hello Ramesh</h1>
//         </div>
//     )
// }

//const Hello = () => <h1> Hello Suresh</h1> */


///WITHOUT USING JSX

const Hello = () => {
    return(
        React.createElement('div',null,[React.createElement('h1',null,'Hello Ramsamy'),React.createElement('h2',null,'Hello Ramsamy')])
    )
     

}


export default Hello;