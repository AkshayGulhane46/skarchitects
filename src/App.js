
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Navigate , Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
