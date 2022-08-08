import React ,{useState,useEffect} from 'react'

function UseEffect(){
    const [count, setCount] = useState(0);

   useEffect(()=>{
    console.log(`Clicked ${count} times `)
   })

   return (
    <div>
        <button onClick={()=> setCount(count+1)} >click {count} times </button>
    </div>
   )
}

export default UseEffect 