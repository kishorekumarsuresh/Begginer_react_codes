import React, { useEffect, useState } from 'react'

function BackToTop() {

    const  [scrol,setScrol] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>250){
                setScrol(true)
            }
            else{
                setScrol(false)
            }
        })
    },)
    const scrollup = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <div>
      {scrol && <button style={{
        position:"fixed",
        bottom:"50px",
        right:"50px",
        height:"50px",
        width:"50px",
        fontSize:"50px"
      }}
      onClick={scrollup}>

        <strong>^</strong>
        </button>
        }
    </div>
  )
}

export default BackToTop
