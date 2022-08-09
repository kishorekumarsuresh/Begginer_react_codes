import React, { useState } from 'react'
import Names from './components/Names';
import ErrorBoundary from './components/ErrorBoundary'
import RefDemo from './components/RefDemo';
import UncontrolledComp from './components/UncontrolledComp';
import WithStyle from './components/WithStyle';
import HigherOrderComponent from './components/HigherOrderComponent';
import StylesWithinJs from './components/StylesWithinJs';
import Internal from './components/Internal';
import Form from './materialui/Form';
import Hooks from './components/Hooks(useState)';
import UseEffect from './UseEffect';
import DemoUR from './components/DemoUR';
import CLogin from './context/CLogin';
import CProfile from './context/CProfile';
import { LoginContext } from './context/LoginContext';
import MakeList from './components/makeList';
import BackToText from './components/BackToText';
import GetFpi from './components/GetFpi';
import GetApi from './components/GetFpi';
import PostApi from './components/PostApi';


function App() {

  // const[username,setUsername]= useState("")
  // const[age,setAge]=useState(18)
  // const[showProfile,setShowProfile] = useState(false)
  
  return (

    <div className="App">

      {/* <Form /> */}
      {/* <Internal /> */}

      {/* <LoginContext.Provider value={{username,setUsername,setShowProfile,age}}>
      {showProfile ?<CProfile />:<CLogin />} 
      </LoginContext.Provider> */}
      {/* <WithStyle />
      <MakeList /> */}
      {/* <CLogin /> */}
      {/* {/* </LoginContext.Provider> */}
      
     {/* <ErrorBoundary>
     <Names Name="" /> 
     </ErrorBoundary> */}
      {/* <GetFpi /> */}
      <GetApi />
      {/* <PostApi /> */}
     {/* <BackToText/> */}
     {/* <RefDemo /> */}
     
     {/* <HigherOrderComponent /> */}
     {/* <Internal/> */}
     {/* <Form/> */}
     {/* <Hooks />
     <UseEffect name="Ragu"/> */}
     {/* <WithStyle />
     <Form /> */}
      {/* <RefDemo /> */}
      {/* <DemoUR /> */}




    </div>
    
  );
}


export default App;
