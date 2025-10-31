import { React } from "react";
import UniSenaiLogo from '/images/logo-unisenai.png'
import { Link } from 'react-router-dom';

export default function Navbar() {


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-16 flex flex-row gap-24 w-full bg-white text-gray-600 shadow-md">
        <div>
          <img src={UniSenaiLogo} alt="Logo do Senai" className="cursor-pointer w-32 h-auto from-blue-600 to-[#0eb3e8] text-white" />
        </div>
        <div className="flex flex-row justify-between w-full font-bold">
          <Link to={"/"}>
          <span className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-gray-500 hover:text-gray-700">INÍCIO</span>
          </Link>
          <Link to={"/"}>
          <span className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-gray-500 hover:text-gray-700">NOSSO PROJETO</span>
          </Link>
          <Link to={"/"}>
          <span className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-gray-500 hover:text-gray-700">EQUIPE</span>
          </Link>
          <span className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-gray-500 hover:text-gray-700">MAPA DA CIDADE</span>
          <span className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-gray-500 hover:text-gray-700">CENTROS TECNOLÓGICOS </span>
        </div>
      </div>
    </>
  );
}