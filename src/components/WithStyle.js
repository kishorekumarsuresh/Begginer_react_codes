import { color } from '@mui/system'
import React, { Component } from 'react'
import { withStyles } from '@mui/styles'
import PropTypes from 'prop-types'

const styles = ({
    heading:{
        color:'green'
       // backgroundColor:'blue'
    }
})

class WithStyle extends Component {
  render() {
    const {classes} = this.props
    return (
      <div>
        <h1 className={classes.heading}> Example of WithStyle..</h1>
        {/* <h2 className='h2'> Example of WithStyle..</h2>
        <h3 className='h1'> Example of WithStyle..</h3> */}
      </div>
    )
  }
}

WithStyle.propTypes={
    classes:PropTypes.object.isRequired

}

export default withStyles(styles)  (WithStyle) ;

