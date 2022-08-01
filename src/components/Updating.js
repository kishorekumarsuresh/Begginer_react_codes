import React,{Component} from 'react'

class Updating extends Component {

    constructor(props){
        super(props)
        this.state = {
            stock : 10
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {stock:0}
    // }
    
    shouldComponentUpdate(){
        return true
    }

    render (){
        return (
            <div>
                <h3>the current stock is {this.state.stock} </h3>
                <button onClick={()=>{this.setState({stock:20})}} > Current_Stock </button>
            </div>
        )
        
    }
}

export default Updating