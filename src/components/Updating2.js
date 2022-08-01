import React,{Component} from "react";

class Updating1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            color: "Red"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"Green"})
        },4000)
    }

    


    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("d1").innerHTML=`Before update ${prevState.color}`

    }
    

    componentDidUpdate(){
        document.getElementById("d2").innerHTML=`After update ${this.state.color}`
    }

    render(){
        return (
            <div>
                <p>The signal is {this.state.color}</p>
                <div id="d1"> </div>
                <div id="d2"> </div>
            </div>
        )
    }
}

export default Updating1