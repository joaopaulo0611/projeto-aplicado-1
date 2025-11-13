import { React } from "react";
import UniSenaiLogo from '/images/logo-unisenai.png'
import { Link } from 'react-router-dom';

export default function Navbar() {


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-16 flex flex-row gap-24 w-full bg-white text-gray-600 shadow-md">
        <div className="flex flex-row justify-between w-full font-bold">
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
      </div>
    </>
  );
}