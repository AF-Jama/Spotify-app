import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
