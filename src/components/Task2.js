import React,{Component} from "react";
import Button from '@mui/material/Button';

class Task2 extends Component {
    // displayName = (props) => {
    //    alert(`The name is ${this.props.Name}`)
    //     //document.getElementById("id1").innerHTML = `Welcome ${this.props.Name}`;
    // }

        
    

    render(){
        return (
            <div>
            <p id="id1"></p>
                <Button variant="contained" onClick={(props) =>{alert(`Hello ${this.props.Name}`)}} > Display </Button>
                
            </div>
        )
    }
}

export default Task2
