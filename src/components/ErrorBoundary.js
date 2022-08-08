import React, { Component } from 'react'

 class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }
    

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log("Invalid name",error)
        console.log("Invalid name",info)
    }

  render() {
    if (this.state.hasError){
        return <h1>Invalid Name.../ Name Doesnt Exist !</h1>
    }
    return <h3>  {this.props.children }</h3>
  }
}

export default ErrorBoundary
