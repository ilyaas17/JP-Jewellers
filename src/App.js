import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {



  return (
    <div className='main-class'>
        <Navbar />
        <Home />
        <About />
        <Contact />
    </div>
  );
}

export default App;
