import React from 'react'

 function Internal() {
    const styles = {
       st : { color:'green',
        textDecoration:'underline',
        backgroundColor:'grey',
        display : 'flex',
        alignItem : 'center',

      },
        st1 :{
          color:'brown',
        textDecoration:'none',
        backgroundColor:'grey',
        },
        st2:{
          display:'flex',
          flexDirection:'column',
          justifyContent : 'center',
          backgroundColor:'orange'
        }
    }

  return (
    <div style={styles.st2}>
      <h1 style={styles.st}> Internal CSS I</h1>
      <h2 style={styles.st1}>Internal CSS II</h2>
    </div>
  )
}

export default Internal