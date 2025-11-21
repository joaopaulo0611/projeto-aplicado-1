import { React, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-16 flex flex-row gap-24 w-full bg-white text-gray-600 shadow-md">
        <div className="hidden md:block flex-row justify-between w-full font-bold">
          <Link to={"/"} className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
          <span className="text-gray-500 hover:text-gray-700">INÍCIO</span>
          </Link>
          <Link to={"/"} className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
          <span className="text-gray-500 hover:text-gray-700">NOSSO PROJETO</span>
          </Link>
          <Link to={"/"} className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
          <span className=" text-gray-500 hover:text-gray-700">EQUIPE</span>
          </Link>
          <Link to="/mapa-da-cidade" className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"><span className=" text-gray-500 hover:text-gray-700">MAPA DA CIDADE</span></Link>
          <Link to="/centros-tecnologicos" className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"><span className=" text-gray-500 hover:text-gray-700">CENTROS TECNOLÓGICOS </span></Link>
          <Link to="/dashboard" className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"><span className=" text-gray-500 hover:text-gray-700">DASHBOARD</span></Link>
        </div>

        <div className="fixed top-0 md:hidden left-0 right-0 z-50 transition-all duration-300 py-4 px-4 bg-white text-gray-600 shadow-md">
          <div className="flex justify-between items-center">
            <a href='/' className="font-bold text-smS">PROJETO APLICADO 2025</a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mt-4 flex flex-col gap-4 font-bold pb-4 text-gray-600">
              <a href='/' onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
              <a href='#projeto' onClick={() => setIsMenuOpen(false)}>NOSSO PROJETO</a>
              <a href='#equipe' onClick={() => setIsMenuOpen(false)}>EQUIPE</a>
              <Link to="/mapa-da-cidade" onClick={() => setIsMenuOpen(false)}>MAPA DA CIDADE</Link>
              <Link to="/centros-tecnologicos" onClick={() => setIsMenuOpen(false)}>CENTROS TECNOLÓGICOS</Link>
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>DASHBOARD</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}