import React ,{Component} from 'react'

class ControlledComp extends Component{

    constructor(props) {
        super(props)
        this.state={
            value:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        this.setState({
            value : e.target.value 
        })
    }

    handleSubmit(e){
        alert(`the name is ${this.state.value}`)
        e.preventDefault();
    }

    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" value={this.state.value}  onChange={this.handleChange}/>
                </label>

                <br/>
                <br/>

                <input type="submit" value="Submit" />

            </form>
          
        </div>
      )
    }
}

export default ControlledComp ;