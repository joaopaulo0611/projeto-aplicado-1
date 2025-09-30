import { useEffect, useState, React } from "react";
import SenaiLogo from '/images/senai-logo.png'

export default function Navbar() {

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
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-8 px-16 flex flex-row gap-24 w-full bg-gradient-to-r ${isScrolled ? ("bg-white text-gray-600") : ("from-blue-600 to-[#0eb3e8] text-white")} `}>
        <div>
          <img src={SenaiLogo} alt="Logo do Senai" className="w-32 h-auto" />
        </div>
        <div className="flex flex-row justify-between w-full font-bold">
          <span className={`cursor-pointer ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("from-blue-600 to-[#0eb3e8] text-white hover:text-gray-300 transition-colors duration-200")}`}>INÍCIO</span>
          <span className={`cursor-pointer ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("from-blue-600 to-[#0eb3e8] text-white hover:text-gray-300 transition-colors duration-200")}`}>NOSSO PROJETO</span>
          <span className={`cursor-pointer ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("from-blue-600 to-[#0eb3e8] text-white hover:text-gray-300 transition-colors duration-200")}`}>EQUIPE</span>
          <span className={`cursor-pointer ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("from-blue-600 to-[#0eb3e8] text-white hover:text-gray-300 transition-colors duration-200")}`}>MAPA DE CALOR</span>
          <span className={`cursor-pointer ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("from-blue-600 to-[#0eb3e8] text-white hover:text-gray-300 transition-colors duration-200")}`}>CENTROS TECNOLÓGICOS </span>
        </div>
      </div>

    </>
  );
}