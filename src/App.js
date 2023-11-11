
import './App.css';
import { BrowserRouter as Router , Navigate , Route, Routes } from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header';



function App() {
  return (
    <>
    <body>
      

    <wc-toast/>
    
    </body>
    
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
