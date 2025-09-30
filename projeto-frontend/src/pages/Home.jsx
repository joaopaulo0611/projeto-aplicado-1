import Navbar from "../components/Navbar";
import LogoPaq from '/images/logo-paq.png'
import { useEffect, useState, React } from "react";
import SenaiLogo from '/images/senai-logo.png'

export default function Home() {

    const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <>
        <div className="bg-gradient-to-r from-blue-600 to-[#0eb3e8] text-white">
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-8 px-16 flex flex-row gap-24 w-full ${isScrolled ? ("bg-white text-gray-600") : ("bg-gradient-to-r from-blue-600 to-[#0eb3e8] text-white")} `}>
                    <div>
                      <img src={SenaiLogo} alt="Logo do Senai" className="w-32 h-auto from-blue-600 to-[#0eb3e8] text-white" />
                    </div>
                    <div className="flex flex-row justify-between w-full font-bold">
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>INÍCIO</span>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>NOSSO PROJETO</span>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>EQUIPE</span>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>MAPA DE CALOR</span>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>CENTROS TECNOLÓGICOS </span>
                    </div>
                  </div>
            <div className="px-16 pt-60 pb-80 justify-center gap-48 flex flex-row text-9xl text-white h-auto" style={{background: 'linear-gradient(to bottom, transparent 65%, white)'}}>
                <div className="  border-r-6 ">
                    <div className="flex flex-col pr-32 font-bold pt-20">
                        <span>PROJETO</span>
                        <span>APLICADO I</span>
                    </div>
                </div>
                <div className="pr-12">
                    <a href="https://prototipandoaquebrada.org/">
                    <img src={LogoPaq} alt="Logo PAQ"  className="w-80 h-auto hover:-translate-y-2 transition-transform duration-200" />
                    </a>
                </div>
            </div>
            </div>
        </>
    );
}