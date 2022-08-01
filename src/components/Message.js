import React, { Component } from "react";
import './Styles.css'
class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'Click here for registration',
            flag: false
        }

    }

    changeMessage() {
        this.setState({
            message: 'Thanks for registering',
            flag: true
        })
    }

    render() {

        return (
            <div>
                <h1 id={this.state.flag ? "id1" : "id2"} > {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}> Register</button>
            </div>

        )
    }
}

export default Message;