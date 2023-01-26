import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import './css/styles.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' component={<NoPage />}/>
        
      </Routes>
    </Router>
  )
}

export default App
