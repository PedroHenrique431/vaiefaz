import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/pages/HomePage/Footer/Footer';
import About from './components/pages/About/About';
import Contato from './components/pages/Contato/Contato'
import Creditos from './components/pages/Creditos/creditos';
import Confirmado from './components/pages/Confirmado/Confirmado';

function App() {
  return (
    <Router>
     <Navbar />
     

     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/creditos" element={<Creditos />} />
        <Route path="/confirmado" element={<Confirmado />} />
     </Routes>

     <Footer/>
    </Router>

    
   
  );
}

export default App;
