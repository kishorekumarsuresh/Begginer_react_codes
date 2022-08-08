
import { FormControl, FormLabel, TextField, Typography } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles';


  const useStyles = makeStyles({
    field:{
      marginTop : 20,
      marginBottom : 20,
      diplay : 'block',
       color : 'blue !important'
    }
  })

 function Form() {

  const classes = useStyles();

  return (
    <div>
      <Typography 
       variant='h3'
       color='secondary'
       align='center'
       className={classes.field}
       >Feedback form</Typography>

      {/* <Container> */}

      <FormControl >

        
        <br/>
        <FormLabel>Your name</FormLabel>
        <TextField  
       label='Enter your name'
       color='success'
       variant='outlined'
       align='center'
       required/>
       <br/>
       <br/>
       <br/>

       <FormLabel>Enter your comments</FormLabel>
       <br/>
       <br/>
        <TextField 

       fullWidth
       multiline
       rows={4}
       label='Tell us something...'
       color='success'
       variant='outlined'
       
       
       align='center'
       required/>
       

    </FormControl>
    {/* </Container>        */}
    </div>
  )
}

export default Form
