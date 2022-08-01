import ClassofProps from './components/ClassofProp';
import Proptypes from './components/Proptypes';
function App() {
  
  return (
    <div className="App">
    <ClassofProps name="Kishore "   colors={["blue"]}> </ClassofProps>
    <ClassofProps age={20} colors={["blue"]}/>
    <ClassofProps name="Sanjai " />
    </div>
  );
}

export default App;












