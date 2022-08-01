import React,{Component} from "react";

class Mounting extends Component{

    constructor(props){
        super(props)
        this.state = {
            level : 1
        }
    }

    // static getDerivedStateFromProps (props, state){
    //     return {level: props.nxt+10 }
    // }

    componentDidMount () {
        setTimeout (()=> {
            this.setState({level :3})
        },3000)
    }

    render(){
        return (
            <div>
                <h1>the next level is {this.state.level}</h1>
            </div>
        )
    }
}

export default Mounting
