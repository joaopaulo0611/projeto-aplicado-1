import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import MapaCidade from './pages/MapaCidade';
import Dashboard from './pages/Dashboard'; 

function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/mapa-da-cidade" element={<MapaCidade/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
