import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GetApi() {

    const [data,setData] = useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            // console.log(data)
            setData(res.data)
        })
    },[])
  return (
    <Container>
    <div>
      <h1>API HANDLING USING Axios...!</h1>
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

export default GetApi
