import React from 'react'
import {Footer} from './components/Footer/Footer'
import { Sobre } from './pages/Sobre/Sobre'
import { Home } from './pages/Home/Home'
import { Relatos } from './pages/Relatos/Relatos'
import { Informacoes } from './pages/Informacoes/Informacoes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <Sobre />
        <Relatos />
        <Informacoes />
        <Footer />
      </div>
  );
}

export default App;