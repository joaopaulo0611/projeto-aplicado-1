import LogoPaq from '/images/logo-paq.png'
import { useEffect, useState, React } from "react";
import UniSenaiLogo from '/images/logo-unisenai.png'
import { Link } from 'react-router-dom';

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
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-16 flex flex-row gap-24 w-full ${isScrolled ? ("bg-white text-gray-600 shadow-md") : ("bg-gradient-to-r from-blue-600 to-[#0eb3e8] text-white")} `}>
                    <div>
                      <img src={UniSenaiLogo} alt="Logo do Senai" className="cursor-pointer w-32 h-auto from-blue-600 to-[#0eb3e8] text-white" />
                    </div>
                    <div className="flex flex-row justify-between w-full font-bold">
                      <a href='#sobre'>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>INÍCIO</span>
                      </a>
                      <a href='#projeto'>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>NOSSO PROJETO</span>
                      </a>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>EQUIPE</span>
                      
                      <Link to="/mapa-da-cidade"><span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>MAPA DA CIDADE </span></Link>
                      <span className={`cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>CENTROS TECNOLÓGICOS </span>
                    </div>
                  </div>
            <div className="px-16 pt-64 pb-80 justify-center gap-48 flex flex-row text-9xl text-white h-auto" style={{background: 'linear-gradient(to bottom, transparent 65%, white)'}}>
                <div className="  border-r-6 ">
                    <div className="flex flex-col pr-32 font-bold pt-20">
                        <span>PROJETO</span>
                        <span>APLICADO I</span>
                    </div>
                </div>
                <div className="pr-12">
                    <a href="https://prototipandoaquebrada.org/" target='blank'>
                    <img src={LogoPaq} alt="Logo PAQ" target="blank" className="w-80 h-auto hover:-translate-y-2 transition-transform duration-200" />
                    </a>
                </div>
            </div>
            <div id='sobre'></div>
            </div>
            <div className="flex flex-row gap-24 justify-between px-52 bg-white pt-48 pb-24">
                <div className="border border-gray-200 w-1/2 rounded-xl shadow-md px-10 py-5 cursor-pointer hover:shadow-xl transition duration-200">
                    <span className="text-black flex justify-center font-bold text-3xl mb-6">O QUE É O PAQ?</span>
                    <div className="text-justify text-2xl">
                    <span className="text-black">O "Prototipando a Quebrada", também conhecido como PAQ, é uma organização cuja missão
                       é conectar a juventude da periferia ao conhecimento e oportunidades do ecossistema de 
                       tecnologia. Eles visam despertar os jovens para novos futuros possíveis, fazê-los sentir
                        que pertencem ao ecossistema da tecnologia e capacitá-los para ocupar esses espaços. A 
                        organização fornece acesso a infraestrutura de qualidade, cursos e mentoria. Além disso, 
                        eles orientam o desenvolvimento dos jovens rumo ao sucesso nas principais carreiras de 
                        tecnologia. Promovem também a mobilidade social através da empregabilidade, conectando 
                        os jovens qualificados em tecnologia com oportunidades de emprego</span>
                        </div>
                </div>
                 <div className="border border-gray-200 w-1/2 rounded-xl shadow-md p-5 text-black cursor-pointer hover:shadow-xl transition duration-200">
                    <span className="text-black flex justify-center font-bold text-3xl">DESAFIO II</span>
                    <div className='flex flex-col gap-8 mt-12 text-2xl'>
                    <span>• Nas cidades de rede, quais são os bairros de quebrada? </span>
                    <span>• Qual o tamanho da população desses territórios entre 15 e 17 anos? </span>
                    <span>• Quais escolas estão presentes nesses territórios? </span>
                    <span>• Existem instituições de terceiro setor atuando com esses jovens? </span>
                    </div>
                </div>
            </div>
            <div className="mt-44 flex flex-col items-center gap-6 pb-10 ">
              <div className="flex justify-center">
              <span className='text-3xl font-bold' id='projeto'>NOSSO PROJETO</span>
              </div>
              <div className='border text-white bg-gradient-to-br py-6 from-blue-700 to-blue-400 border-gray-200 w-3/4 rounded-xl shadow-md items-center'>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
                <span className='flex justify-center'>Texto sobre o projeto</span>
              </div>
            </div>
        </>
    );
}