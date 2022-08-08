import React,{Component} from "react";
import Task2 from "./Task2";
import Task3 from "./Task3";

class Task1 extends Component {

    constructor(props){
        super(props)
        this.state = {
            Name : ""
        }
    }

    changeName = (value) => { this.setState({Name : value})}



    render() {
        return (
            <div>
                <br />
                <Task3  Name={this.state.Name} Msg= {this.changeName} />

               <p> The Display name is {this.state.Name} </p>
               <Task2 Name={this.state.Name} />
               <br />
               
            </div>
        )
    }
}

export default Task1 


