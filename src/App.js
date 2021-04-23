import './App.css';
import Lifecycle from './Components/Lifecycle'
import Class from './Components/ClassComponent'
import Functional from './Components/FunctionalComponent'

function App() {
  return (
    <div className="App">
      <Class />
      <Functional />
      <Lifecycle />
    </div>
  );
}

export default App;
