import './App.css';
import Lifecycle from './Components/Lifecycle'
import Class from './Components/ClassComponent'
import Functional from './Components/FunctionalComponent'

function App() {
  return (
    <div className="App">
      <Lifecycle />
      <Class />
      <Functional />
    </div>
  );
}

export default App;
