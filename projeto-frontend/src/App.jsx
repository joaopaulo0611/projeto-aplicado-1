import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MapaCidade from './pages/MapaCidade';
import Dashboard from './pages/Dashboard';
import CentroTecnologicos from './pages/CentrosTecnologicos';
import ScrollToTop from './components/ScrollToTop'; 

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/mapa-da-cidade" element={<MapaCidade/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/centros-tecnologicos" element={<CentroTecnologicos/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
