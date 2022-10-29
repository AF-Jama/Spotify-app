import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer';
import HomeScreen from './components/HomeScreen'
import StatsScreen from './components/StatsScreen';
import ContactScreen from './components/ContactScreen';
import AboutScreen from './components/AboutScreen';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
        <Route path="/stats" element={<StatsScreen/>}/>
        <Route path="/contact" element={<ContactScreen/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
