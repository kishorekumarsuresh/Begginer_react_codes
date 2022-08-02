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

    changeName = (e) => { this.setState({Name : e.target.value})}



    render() {
        return (
            <div>
               <p> The Display name is {this.state.Name} </p>
               <Task2 Name={this.state.Name} />
               <Task3 Msg={this.changeName} Name={this.state.Name}/>
            </div>
        )
    }
}

export default Task1 


