import React, { Component } from 'react'

 class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    componentDidMount(){
       this.inputRef.current.focus()
        
    }
    
    
    handleChange = ()=> {
        alert(`the name is ${this.inputRef.current.value}`)
        
    }

  render() {
    return (
      <div>
        <h1><input type="text"  ref={this.inputRef}  /></h1>
        <button  onClick={this.handleChange}> Enter</button>
      </div>
    )
  }
}

export default RefDemo
