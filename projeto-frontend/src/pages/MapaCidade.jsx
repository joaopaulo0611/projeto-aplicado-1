import { useState, React } from "react";
import Navbar from "../components/Navbar";
import MapaSJ from '/images/mapaSJ.png'
import { X, ArrowRight } from 'lucide-react';

export default function MapaCidade() {

    const [modalSerraria, setModalSerraria] = useState(false);
    const [modalPedregal, setModalPedregal] = useState(false);
    const [modalJardimCidade, setModalJardimCidade] = useState(false);

    function openModalSerraria() {
        setModalSerraria(true);
    }
    function closeModalSerraria() {
        setModalSerraria(false);
    }

    function openModalPedregal() {
        setModalPedregal(true);
    }
    function closeModalPedregal() {
        setModalPedregal(false);
    }

    function openModalJardimCidade() {
        setModalJardimCidade(true);
    }
    function closeModalJardimCidade() {
        setModalJardimCidade(false);
    }


    return (
        <>
            <Navbar />
            <div className="text-black mt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Mapa da cidade de São José</span>
                <span>O mapa exibe os principais bairros e regiões mais vulnerabilizados da cidade de São José-SC</span>
            </div>
            <div className="relative flex justify-center mt-10 pb-10">
                <img src={MapaSJ} alt="Mapa da cidade de São José" className="w-150 border hover:shadow-xl transition duration-200 border-gray-200 rounded-2xl shadow-md h-auto mt-6" />
                <div onClick={openModalSerraria} className="mt-32 ml-52 absolute shadow2xl bg-red-600/60 p-4 rounded-4xl hover:bg-red-600/80 cursor-pointer"></div>
                <div onClick={openModalPedregal} className="mt-56 ml-56 absolute shadow2xl bg-red-600/60 p-3 rounded-4xl hover:bg-red-600/80 cursor-pointer"></div>
                <div onClick={openModalJardimCidade} className="mt-58 ml-80 absolute shadow2xl bg-red-600/60 p-3 rounded-4xl hover:bg-red-600/80 cursor-pointer"></div>
            </div>

            {modalSerraria && (<div>
                <div onClick={closeModalSerraria} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-6">
                        <div className="fixed top-4 right-4 bg-gray-800/70  rounded-4xl p-3 cursor-pointer" onClick={closeModalSerraria}>
                            <X className="  text-white hover:text-gray-400 cursor-pointer z-50"></X>
                        </div>
                        <div className="bg-white p-10 max-w-[900px] rounded-lg">
                            <div>
                                <span className="text-2xl font-bold">Serraria, São José - SC</span></div>
                            <div className="flex flex-row gap-24 justify-between">
                                <div>
                                    <img src="/images/serraria.jpg" alt="Imagem da Serraria" className="w-96 h-auto mt-4 mb-4 rounded-2xl shadow-md" />
                                </div>
                                <div>
                                    <span>A Rua dos Operários fica no bairro Serraria, em São José, na
                                        região metropolitana de Florianópolis (Grande Florianópolis).
                                        É uma via residencial, com acesso pela marginal da BR-101, próxima
                                        a bairros como Barreiros, Ipiranga e Areias. É uma área mista, com
                                        casas simples, pequenos comércios e algumas ocupações informais
                                        em trechos próximos ao manguezal e ao Rio Araújo, o que a coloca
                                        entre as zonas de vulnerabilidade urbana do município.
                                        Historicamente, essa região da Serraria — onde está a Rua dos
                                        Operários — cresceu de forma irregular, com déficit de infraestrutura,
                                        problemas de drenagem e risco ambiental, principalmente por estar em
                                        área de baixa altitude e sujeita a alagamentos. A prefeitura de São
                                        José tem incluído o local em planos de reurbanização e regularização
                                        fundiária, dentro das políticas de melhoria habitacional da cidade.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>)}

            {modalPedregal && (<div>
                <div onClick={closeModalPedregal} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-6">
                        <div className="fixed top-4 right-4 bg-gray-800/70  rounded-4xl p-3 cursor-pointer" onClick={closeModalPedregal}>
                            <X className="  text-white hover:text-gray-400 cursor-pointer z-50"></X>
                        </div>
                        <div className="bg-white p-10 max-w-[900px] rounded-lg">
                            <div>
                                <span className="text-2xl font-bold">Pedregal, São José - SC</span></div>
                            <div className="flex flex-row gap-24 justify-between">
                                <div>
                                    <img src="/images/serraria.jpg" alt="Imagem da Serraria" className="w-96 h-auto mt-4 mb-4 rounded-2xl shadow-md" />
                                </div>
                                <div>
                                    <span>A Rua dos Operários fica no bairro Serraria, em São José, na
                                        região metropolitana de Florianópolis (Grande Florianópolis).
                                        É uma via residencial, com acesso pela marginal da BR-101, próxima
                                        a bairros como Barreiros, Ipiranga e Areias. É uma área mista, com
                                        casas simples, pequenos comércios e algumas ocupações informais
                                        em trechos próximos ao manguezal e ao Rio Araújo, o que a coloca
                                        entre as zonas de vulnerabilidade urbana do município.
                                        Historicamente, essa região da Serraria — onde está a Rua dos
                                        Operários — cresceu de forma irregular, com déficit de infraestrutura,
                                        problemas de drenagem e risco ambiental, principalmente por estar em
                                        área de baixa altitude e sujeita a alagamentos. A prefeitura de São
                                        José tem incluído o local em planos de reurbanização e regularização
                                        fundiária, dentro das políticas de melhoria habitacional da cidade.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>)}

            {modalJardimCidade && (<div>
                <div onClick={closeModalJardimCidade} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col gap-6">
                        <div className="fixed top-4 right-4 bg-gray-800/70  rounded-4xl p-3 cursor-pointer" onClick={closeModalJardimCidade}>
                            <X className="  text-white hover:text-gray-400 cursor-pointer z-50"></X>
                        </div>
                        <div className="bg-white px-10 pt-10 max-w-[900px] rounded-lg">
                            <div>
                                <span className="text-2xl font-bold">Jardim Cidade de Florianópolis, São José - SC</span></div>
                            <div className="flex flex-row gap-24 justify-between mt-8">
                                <div>
                                    <img src="/images/serraria.jpg" alt="Imagem da Serraria" className="w-96 h-auto mt-4 mb-4 rounded-2xl shadow-md" />
                                </div>
                                <div className="text-justify">
                                    <span>A Rua dos Operários fica no bairro Serraria, em São José, na
                                        região metropolitana de Florianópolis (Grande Florianópolis).
                                        É uma via residencial, com acesso pela marginal da BR-101, próxima
                                        a bairros como Barreiros, Ipiranga e Areias. É uma área mista, com
                                        casas simples, pequenos comércios e algumas ocupações informais
                                        em trechos próximos ao manguezal e ao Rio Araújo, o que a coloca
                                        entre as zonas de vulnerabilidade urbana do município.
                                        Historicamente, essa região da Serraria — onde está a Rua dos
                                        Operários — cresceu de forma irregular, com déficit de infraestrutura,
                                        problemas de drenagem e risco ambiental, principalmente por estar em
                                        área de baixa altitude e sujeita a alagamentos. A prefeitura de São
                                        José tem incluído o local em planos de reurbanização e regularização
                                        fundiária, dentro das políticas de melhoria habitacional da cidade.</span>
                                </div>
                            </div>
                            <div className="mt-10 pb-5 text-end w-full flex justify-end gap-1">
                                <span className="font-semibold">Ver os dados do bairro </span><ArrowRight className="font-semibold" />
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>)}




        </>
    )
}