import React,{Component} from "react";

class Task3 extends Component {

    blurChange(){
        let x = document.getElementById("id1");
        x.value = x.value.toUpperCase();
    }
    render (){
        return (
            <div>
                <input id="id1" type="text" 
                value={this.props.Name}
                onChange={this.props.Msg}
                onBlur={this.blurChange}/>
            </div>
        )
    }
}

export default Task3

