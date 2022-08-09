import React, { Component } from 'react'
import axios from 'axios'

 class PostApi extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userId : '',
         title : '',
         body : ''

      }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitForm = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
         .then(res =>{
            console.log(res)
         })
         .catch(err => {
            console.log(err)
         })
         
    }
    
  render() {    

    const {userId , title , body } = this.state
    return (
      <div >
        <center>
        <form>
            <input type="text"
                name="userId"
                value={userId}
                onChange={this.handleChange}
            />
            <br/>
            <br/>
            <input type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
            />
            <br/>
            <br/>
            
            <input type="text"
                name="body"
                value={body}
                onChange={this.handleChange}
            />
            <br/>

            <button onClick={this.submitForm}>Post</button>
        </form>
        </center>
      </div>
    )
  }
}

export default PostApi