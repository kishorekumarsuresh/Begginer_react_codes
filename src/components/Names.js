import React from 'react'


function Names(props) {

    if (props.Name === ''){
        throw new Error ('Name Doesnt Exist!!! ')
    }
  return (
    <div>
      <h2>the Name is {props.Name} </h2>
    </div>
  )
}


export default Names