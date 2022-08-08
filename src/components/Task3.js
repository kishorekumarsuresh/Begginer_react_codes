import React,{Component} from "react";

class Task3 extends Component {
    constructor(props){
        super(props);
        this.blurChange = this.blurChange.bind(this);
    }
    blurChange(event){
        this.props.Msg(event.target.value.toUpperCase());
    }
    render (){
        return (
            <div>
                <input  type="text" 
                value={this.props.Name}
                onChange={(e)=>this.props.Msg(e.target.value)}
                onBlur={this.blurChange}/>
            </div>
        )
    }
}

export default Task3

