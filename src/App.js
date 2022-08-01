import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import StyleSheets from './components/Stylesheets';
import Hooks from './components/hooks';
function App() {
  const a ='hii';
  const b = 1;

  const lofFn = () => {
    console.log(b);
  }

  return (
    <div className="App">
      <Hooks />
      {/* <StyleSheets />
      <Message name={a} func={lofFn} b={b}/> */}
     
    </div>
  );
}

export default App;












{/* < Message /> */}
      {/* <Message /> */}
     {/* <Greet  name="Sugan">
      <button>Click here</button>
      </Greet> */}
     {/* </Greet>
     <Greet  name={true}>
      <label>Enter your name </label>
      <input type="text" name="fname"/>
     </Greet>
     <Greet  name="Raman">
      <input type="Reset" value="reset"/> */}
     

      {/* <Hello />

      <ClassClick />
      <FunctionClick /> */}
     {/* <Welcome name="Ravi">
       
     //</Welcome>
     <FunctionClick />
      //<ClassClick /> */}
      {/* <ParentComponent />
      <Hello /> */}