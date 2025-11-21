import LogoPaq from '/images/logo-paq.png'
import { useEffect, useState, React } from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { Menu, X } from 'lucide-react';


export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="overflow-x-hidden">
      <div className="text-white overflow-x-hidden">
        <div className={`fixed top-0 hidden md:block left-0 right-0 z-50 transition-all duration-300 py-6 px-8 lg:px-16 w-full ${isScrolled ? ("bg-white text-gray-600 shadow-md") : ("bg-gradient-to-r from-blue-600 to-[#0eb3e8] text-white")} `}>
          <div className="flex flex-row justify-between w-full font-bold text-sm lg:text-base">
            <a href='/' className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
              <span className={isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}>INÍCIO</span>
            </a>
            <button onClick={() => {
              const element = document.getElementById('projeto');
              if (element) {
                const yOffset = -200;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }} className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
              <span className={isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}>NOSSO PROJETO</span>
            </button>
            <a href='#equipe' className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 scroll-behavior-smooth">
              <span className={isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}>EQUIPE</span>
            </a>
            <Link to="/mapa-da-cidade" className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
              <span className={isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}>MAPA DA CIDADE </span>
            </Link>
            <Link to="/centros-tecnologicos" className='cursor-pointer hover:-translate-y-0.5 transition-transform duration-200'>
            <span className={` ${isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}`}>CENTROS TECNOLÓGICOS </span>
            </Link>
            <Link to="/dashboard" className="cursor-pointer hover:-translate-y-0.5 transition-transform duration-200">
              <span className={isScrolled ? ("text-gray-500 hover:text-gray-700") : ("text-white hover:text-gray-300 transition-colors duration-200")}>DASHBOARD</span>
            </Link>
          </div>
        </div>

        <div className={`fixed top-0 md:hidden left-0 right-0 z-50 transition-all duration-300 py-4 px-4 ${isMenuOpen ? "bg-white text-gray-600 shadow-md" : isScrolled ? ("bg-white text-gray-600 shadow-md") : ("bg-gradient-to-r from-blue-600 to-[#0eb3e8] text-white")} `}>
          <div className="flex justify-between items-center">
            <a href='/' className="font-bold text-smS">PROJETO APLICADO 2025</a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <>
              <div className="fixed inset-0 bg-transparent z-40" onClick={() => setIsMenuOpen(false)}></div>
              <div className="mt-4 flex flex-col gap-4 font-bold pb-4 text-gray-600 relative z-50">
                <a href='/' onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
                <button onClick={() => {
                  setIsMenuOpen(false);
                  const element = document.getElementById('projeto');
                  if (element) {
                    const yOffset = -120;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }} className='text-start'>NOSSO PROJETO</button>
                <a href='#equipe' onClick={() => setIsMenuOpen(false)}>EQUIPE</a>
                <Link to="/mapa-da-cidade" onClick={() => setIsMenuOpen(false)}>MAPA DA CIDADE</Link>
                <Link to="/centros-tecnologicos" onClick={() => setIsMenuOpen(false)}>CENTROS TECNOLÓGICOS</Link>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>DASHBOARD</Link>
              </div>
            </>
          )}
        </div>

        <div className="px-4 sm:px-8 md:px-16 pt-32 md:pt-64 pb-48 md:pb-80 justify-center gap-8 md:gap-48 flex flex-col md:flex-row items-center text-white h-auto relative bg-gradient-to-r from-blue-600 to-[#0eb3e8] overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-white pointer-events-none" style={{ marginBottom: '-1px' }}></div>
          <div className="border-r-0 md:border-r-[6px] md:border-white relative z-10">
            <div className="flex text-4xl sm:text-6xl md:text-7xl lg:text-9xl flex-col pr-0 md:pr-32 font-bold pt-10 md:pt-20 text-center md:text-left">
              <span>PROJETO</span>
              <span className="whitespace-nowrap">APLICADO I</span>
            </div>
          </div>
          <div className="pr-0 md:pr-12 mt-8 md:mt-0 relative z-10">
            <a href="https://prototipandoaquebrada.org/" target='blank'>
              <img src={LogoPaq} alt="Logo PAQ" target="blank" className="w-40 sm:w-52 md:w-72 lg:w-80 xl:w-80 h-auto hover:-translate-y-2 transition-transform duration-200" />
            </a>
          </div>
        </div>
        <div id='sobre'></div>
      </div>

      <div className="bg-white overflow-x-hidden relative" style={{ marginTop: '-2px' }}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-white -mt-1"></div>
      <div className='w-11/12 md:w-5/6 justify-center mx-auto pt-20 md:pt-44 mb-20 md:mb-44'>
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 bg-white pt-12 md:pt-24 pb-12 md:pb-24">
          <div className="border border-gray-200 w-full md:w-1/2 rounded-xl shadow-md px-6 md:px-10 py-5 cursor-pointer hover:shadow-xl transition duration-200">
            <span className="text-black flex justify-center font-bold text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6">O QUE É O PAQ?</span>
            <div className="text-justify text-base sm:text-lg md:text-2xl">
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
          <div className="border border-gray-200 w-full md:w-1/2 rounded-xl shadow-md p-5 text-black cursor-pointer hover:shadow-xl transition duration-200">
            <span className="text-black flex justify-center font-bold text-xl sm:text-2xl md:text-3xl">DESAFIO II</span>
            <div className='flex flex-col gap-4 md:gap-8 mt-6 md:mt-12 text-base sm:text-lg md:text-2xl'>
              <span>• Nas cidades de rede, quais são os bairros de quebrada? </span>
              <span>• Qual o tamanho da população desses territórios entre 15 e 17 anos? </span>
              <span>• Quais escolas estão presentes nesses territórios? </span>
              <span>• Existem instituições de terceiro setor atuando com esses jovens? </span>
            </div>
          </div>
        </div>
      </div>

      <div id='projeto' className="mt-20 md:mt-40 flex flex-col items-center gap-6 pb-10 overflow-x-hidden max-w-full" style={{ scrollMarginTop: '0px' }}>
        <div className='text-white bg-gradient-to-br py-8 md:py-16 w-full max-w-[100vw] from-blue-700 to-blue-400 shadow-md items-center overflow-x-hidden'>
          <div className="flex justify-center px-4">
            <span className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>NOSSO PROJETO</span>
          </div>
          <div className='mt-6 md:mt-10 w-11/12 md:w-5/6 justify-center mx-auto'>
            <span className='flex text-justify text-base sm:text-lg md:text-2xl'>Como forma de solução para o desafio,
              fizemos um mapeamento completo das áreas de quebrada em São José - SC,
              para entender melhor cada bairro e como as pessoas vivem ali. A partir desse
               levantamento, conseguimos identificar quantos jovens de 15 a 17 anos moram
                nesses territórios, o que ajudou a definir com clareza o público que o projeto
                 pretende alcançar. Também levantamos quais escolas existem dentro desses bairros,
                  analisando onde estão localizadas e como podem se conectar ao projeto.
                  Além disso, pesquisamos as organizações do terceiro setor que já trabalham
                   com adolescentes na região, para entender quem já atua ali, evitar ações
                    duplicadas e, sempre que possível, buscar parceria. Com todas essas informações,
                     criamos um diagnóstico do território que serve como base para o projeto.
                      A ideia é usar esse entendimento para planejar ações mais estratégicas,
                       ampliar oportunidades para os jovens, fortalecer as redes da comunidade
                        e apoiar de forma mais efetiva seu desenvolvimento educacional e social.</span>
          </div>
        </div>
      </div>

      <div className='mt-20 md:mt-42 pb-16 md:pb-32'>
        <div className='justify-center flex pt-10 pb-10 md:pb-20 text-black text-2xl md:text-3xl font-bold' >
          <span id='equipe' style={{ scrollMarginTop: '30vh' }}>EQUIPE</span>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 md:gap-28 justify-center items-center pb-10 md:pb-20 px-4'>

          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 p-12 md:p-20 w-2 rounded-full'>
            </div>
            <div className='pt-1 flex flex-col justify-center'>
              <span className='text-base md:text-xl text-center font-bold'>João Paulo Cappeletti</span>
              <span className='text-xs md:text-base text-center'>joaopaulocappeletti06@gmail.com</span>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 p-12 md:p-20 w-2 rounded-full'>
            </div>
            <div className='pt-1 flex flex-col justify-center'>
              <span className='text-base md:text-xl text-center font-bold'>Matheus Silva da Cruz</span>
              <span className='text-xs md:text-base text-center break-all'>matheus_silva-cruz@estudante.sesisenai.org.br</span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 p-12 md:p-20 w-2 rounded-full'>
            </div>
            <div className='pt-1 flex flex-col justify-center'>
              <span className='text-base md:text-xl text-center font-bold'>Nicolas Andre Krause de Mello</span>
              <span className='text-xs md:text-base text-center'>mello.nicolasandre@gmail.com</span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 p-12 md:p-20 w-2 rounded-full'>
            </div>
            <div className='pt-1 flex flex-col justify-center'>
              <span className='text-base md:text-xl text-center font-bold'>Rafagath Grazziotin Miceli Klug</span>
              <span className='text-xs md:text-base text-center'>rafagmk@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
}