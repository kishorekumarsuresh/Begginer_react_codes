import React,{Component} from 'react'

class UncontrolledComp extends Component{
    constructor (props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
    }

    handleSubmit(e) {
        alert(`the name  is ${this.input.current.value}`)
        e.preventDefault();
    }
    render(){
        return (
            
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" defaultValue="" placeholder='Uncontrolled Comp'
                        ref={this.input}/>

                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            
        )
    }

}

export default UncontrolledComp