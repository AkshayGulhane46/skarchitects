
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Navigate , Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Projects';
import ContactUs from './components/Pages/ContactUs';

function App() {
  return (
    <>
   
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Services'  Component={Services}/>
          <Route path='/Projects'  Component={Products}/>
          <Route path='/contact-us'  Component={ContactUs}/>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
