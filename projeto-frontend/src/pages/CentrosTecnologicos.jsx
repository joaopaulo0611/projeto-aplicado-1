import { React } from "react";
import Navbar from "../components/Navbar";
import Acate from '/images/acate.png'
import Citesj from '/images/citesj.png'
import Footer from "../components/Footer";

export default function CentroTecnologicos() {

    return (
        <>
            <Navbar />
            <div className="text-black pt-24 md:pt-32 px-6 md:px-20 flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold">Centros Tecnológicos</span>
                <span className="text-sm md:text-base">Descubra os principais centros tecnológicos da cidade de São José - SC</span>
            </div>
            <div className="pb-24">
                <div>
                    <div className="px-4 md:px-20 lg:px-32 xl:px-64 mt-12 md:mt-24 border-gray-200">
                        <div className="border hover:shadow-xl transition duration-200 border-gray-100 bg-white shadow-md flex flex-col gap-5 px-6 md:px-10 pb-6 md:pb-10 pt-6 md:pt-8 rounded-xl md:rounded-2xl">
                            <div>
                                <span className="text-lg md:text-xl font-bold">ACATE | Centro de Inovação</span>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="w-full md:w-[400px] h-48 md:h-64 flex-shrink-0">
                                    <img src={Acate} alt="Imagem do centro tecnológico ACATE" className="w-full h-full object-cover rounded-xl md:rounded-2xl" />
                                </div>
                                <div className="flex flex-col gap-4 md:gap-16">
                                <div>
                                <span className="text-sm md:text-base">A ACATE de São José integra o maior ecossistema de tecnologia
                                     de Santa Catarina. O espaço funciona como um polo de inovação,
                                      reunindo startups, empresas de tecnologia, programas de capacitação
                                       e iniciativas de empreendedorismo. É um ambiente que incentiva
                                        networking, desenvolvimento de projetos e conexão com o setor
                                        produtivo, contribuindo diretamente para o crescimento da área 
                                        de TI na Grande Florianópolis.</span>
                            </div>
                            <div>
                                <span className="font-light text-xs md:text-base">Endereço: Av. Presidente Kennedy, 815 - Campinas, São José - SC, 88101-001</span>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-4 md:px-20 lg:px-32 xl:px-64 mt-12 md:mt-24 border-gray-200">
                        <div className="border hover:shadow-xl transition duration-200 border-gray-100 bg-white shadow-md flex flex-col gap-5 px-6 md:px-10 pb-6 md:pb-10 pt-6 md:pt-8 rounded-xl md:rounded-2xl">
                            <div>
                                <span className="text-lg md:text-xl font-bold">Centro de Inovação e Tecnologia Educacional (Citesj)</span>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="w-full md:w-[400px] h-48 md:h-64 flex-shrink-0">
                                    <img src={Citesj} alt="Imagem do centro tecnológico CITESJ" className="w-full h-full object-cover rounded-xl md:rounded-2xl" />
                                </div>
                                <div className="flex flex-col gap-4 md:gap-16">
                                    <div>
                                <span className="text-sm md:text-base">O Citesj é um centro voltado para educação, tecnologia e práticas
                                     inovadoras dentro do município. Ele oferece cursos, oficinas e atividades
                                      que aproximam estudantes e a comunidade do universo digital, promovendo
                                       inclusão tecnológica e desenvolvimento de habilidades para o futuro.
                                        O espaço funciona como um ponto de apoio para formação, criatividade
                                         e projetos que fortalecem o aprendizado dos jovens em São José.</span>
                                         </div>
                                         <div>
                                            <span className="font-light text-xs md:text-base">Endereço: R. Bento Águido Viêira, 1463 - Bela Vista, São José - SC, 88110-130</span>
                                         </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}