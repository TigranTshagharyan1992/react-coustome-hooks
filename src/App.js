import logo from './logo.svg';
import './App.css';
import {UseInput} from "./myHooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";

function App() {

const inputData = UseInput('');

  return (
    <div className="App">
       <List/>
    </div>
  );
}

export default App;
