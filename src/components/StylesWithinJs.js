import React from 'react'

 function StylesWithinJs() {

    const classes = () => {
        return{
            color:'blue'
        }
    }


  return (
    <div>
      <h1 style={classes}> Styles within JS</h1>
    </div>
  )
}

export default StylesWithinJs