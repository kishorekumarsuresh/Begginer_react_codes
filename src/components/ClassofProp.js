
import React , { Component } from "react"
import Proptypes from "prop-types"

class ClassofProps extends Component {
    

    render (props){
        const {name,age,colors,children} = this.props
        return (
            <div>
                <h1>This is PropTypes created by {name} ,who is {age} years old.</h1>
                <h2> The Favrt color is {colors} </h2>
                <p>{children}</p>
            </div>
        )
    }
}

ClassofProps.propTypes ={
    name : Proptypes.string,
    age : Proptypes.number,
    colors : Proptypes.array
};

ClassofProps.defaultProps ={
    name: "Unknown",
    age: 18
};

export default ClassofProps



