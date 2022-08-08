import React from 'react'
import {useEffect} from 'react'
 function UseEffect(props) {
    const name = props.name
    useEffect(()=>{
        document.title = name
    },[])
  return (
    <>
    <h1> {name}
    </h1>
    </>
  )
}

export default UseEffect
