import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'

function GetFpi() {

    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data =>{
            // console.log(data)
            setData(data)
        })
    },[])
  return (
    <Container>
    <div>
      <h1>API HANDLING USING FETCH...!</h1>
      {  
        (data) ?
        (
        <ul>
            {   
                data.map(post=>{
                    return  <li key={post.id}> 
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                })
               
            }
        </ul> ):
        (<h3> Loading ....!</h3>)
    
        

      }
      


    </div>
    </Container>
  )
}

export default GetFpi
