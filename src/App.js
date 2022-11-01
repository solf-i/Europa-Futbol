import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import Header from './components/Header/Header'

import Header2 from './components/Header/Header2'
import Nosotros from './Views/Nosotros/Nosotros.jsx'
import Contacto from './Views/Contacto/Contacto.jsx'
import Home from './Views/Home/Home.jsx'

function App () {
  return (
    <Router>
      <div className='App'>
        <Header2 />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
