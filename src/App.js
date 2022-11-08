import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer';
import HomeScreen from './components/HomeScreen'
import StatsScreen from './components/StatsScreen';
import ContactScreen from './components/ContactScreen';
import AboutScreen from './components/AboutScreen';
import TopSongCard from './components/TopSongCard';
import AuthContextProvider from './contexts/AuthContext/AuthContextProvider';
import Profile from './components/Profile';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/stats" element={<StatsScreen/>}/>
            <Route path="/contact" element={<TopSongCard/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
