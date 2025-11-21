import { useState, React, useEffect } from "react";
import Navbar from "../components/Navbar";
import MapaSJ from '/images/mapaSJ.png'
import { X, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Serraria from '/images/serraria.png'
import Pedregal from '/images/pedregal.png'
import JardimCidade from '/images/jardimCidade.png'

export default function MapaCidade() {

    const [modalSerraria, setModalSerraria] = useState(false);
    const [modalPedregal, setModalPedregal] = useState(false);
    const [modalJardimCidade, setModalJardimCidade] = useState(false);

    useEffect(() => {
        if (modalSerraria || modalPedregal || modalJardimCidade) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalSerraria, modalPedregal, modalJardimCidade]);

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
            <div className="text-black pt-24 md:pt-32 px-6 md:px-20 flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold">Mapa da cidade de São José</span>
                <span className="text-sm md:text-base">O mapa exibe os principais bairros e regiões mais vulnerabilizados da cidade de São José - SC</span>
            </div>
            <div className="relative flex justify-center mt-6 md:mt-10 pb-4 px-4 md:px-0">
                <img src={MapaSJ} alt="Mapa da cidade de São José" className="w-full md:w-[600px] duration-200 border-gray-200 rounded-xl md:rounded-2xl shadow-md h-auto mt-3 md:mt-6" />
                <div onClick={openModalSerraria} className="top-[30%] left-[35%] md:top-[35%] md:left-[37%] absolute shadow-2xl bg-red-600/60 p-2 md:p-4 rounded-full hover:bg-red-600/80 cursor-pointer"></div>
                <div onClick={openModalPedregal} className="top-[50%] left-[37%] md:top-[52%] md:left-[39%] absolute shadow-2xl bg-red-600/60 p-2 md:p-3 rounded-full hover:bg-red-600/80 cursor-pointer"></div>
                <div onClick={openModalJardimCidade} className="top-[52%] left-[53%] md:top-[54%] md:left-[54%] absolute shadow-2xl bg-red-600/60 p-2 md:p-3 rounded-full hover:bg-red-600/80 cursor-pointer"></div>
            </div>
            <div className="flex justify-center md:justify-start gap-1 text-gray-500 text-xs md:text-sm w-full md:w-[600px] mx-auto pb-10 md:pb-52 px-4 md:px-0">
                <div className="ml-0 md:ml-3">
                    <MapPin  className="font-light size-4 md:size-5 flex"/>
                </div>
                <div>
                    <span>Clique nas regiões em destaque para ver mais informações</span>
                </div>
            </div>

            <Footer />
            {modalSerraria && (<div>
                <div onClick={closeModalSerraria} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                   <div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white rounded-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-end pt-4 pr-4">
                            <X className="text-gray-600 hover:text-gray-800 cursor-pointer z-50" onClick={closeModalSerraria}></X>
                        </div>
                        <div className="px-6 md:px-10 max-w-[900px]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl md:text-2xl font-bold">Serraria, São José - SC</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mt-6 md:mt-8">
                                <div className="w-full md:w-1/2">
                                    <img src={Serraria} alt="Imagem da Serraria" className="w-full mb-4 rounded-xl shadow-lg" />
                                </div>
                                <div className="text-justify w-full md:w-1/2 flex flex-col gap-2">
                                    <div>
                                    <span className="font-semibold text-lg md:text-xl">Região: </span><span className="text-lg md:text-xl">Rua dos Operários</span>
                                    </div>
                                    <div>
                                    <span className="text-sm md:text-base">A Rua dos Operários fica no bairro Serraria, em São José, na
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
                            <div className="mt-6 md:mt-8 pb-6 text-end w-full flex justify-end gap-1">
                                <Link to="/dashboard" className="flex items-center gap-1 hover:bg-gray-50 p-2 rounded-xl duration-300 hover:translate-x-2 text-sm md:text-base"><span className="font-semibold">Ver os dados do bairro </span><ArrowRight className="font-semibold size-4 md:size-5" /></Link>
                                </div>
                        </div>

                    </div>
                </div>
            </div>)}

            {modalPedregal && (<div>
                <div onClick={closeModalPedregal} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white rounded-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-end pt-4 pr-4">
                            <X className="text-gray-600 hover:text-gray-800 cursor-pointer z-50" onClick={closeModalPedregal}></X>
                        </div>
                        <div className="px-6 md:px-10 max-w-[900px]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl md:text-2xl font-bold">Pedregal, São José - SC</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mt-6 md:mt-8">
                                <div className="w-full md:w-1/2">
                                    <img src={Pedregal} alt="Imagem de Pedregal" className="w-full mb-4 rounded-xl shadow-lg" />
                                </div>
                                <div className="text-justify flex flex-col w-full md:w-1/2 gap-2">
                                    <div>
                                    <span className="font-semibold text-lg md:text-xl">Região: </span><span className="text-lg md:text-xl">Pedregal</span>
                                    </div>
                                    <div>
                                    <span className="text-sm md:text-base">O Pedregal, localizado em São José, é uma das áreas mais conhecidas 
                                        por sua vulnerabilidade social na Grande Florianópolis. Surgido a partir
                                        de ocupações irregulares, o bairro cresceu de forma rápida e desordenada,
                                        concentrando uma grande quantidade de moradias populares e famílias de
                                        baixa renda. Apesar de ser oficialmente reconhecido como bairro, boa
                                        parte da região ainda enfrenta problemas de infraestrutura, como falta
                                        de saneamento básico, pavimentação precária e drenagem insuficiente.
                                        Essas condições tornam o Pedregal uma das principais comunidades
                                        urbanas identificadas pelo IBGE no Censo de 2022. Nos últimos anos,
                                        o local vem recebendo atenção especial da prefeitura de São José
                                        e de programas de urbanização que buscam
                                        melhorar as condições de moradia e promover mais qualidade de vida 
                                        para seus moradores.</span>
                                </div>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 pb-6 text-end w-full flex justify-end gap-1">
                                <Link to="/dashboard" state={{ openPedregal: true }} className="flex items-center gap-1 hover:bg-gray-50 p-2 rounded-xl duration-300 hover:translate-x-2 text-sm md:text-base"><span className="font-semibold">Ver os dados do bairro </span><ArrowRight className="font-semibold size-4 md:size-5" /></Link>
                                </div>
                        </div>

                    </div>
                </div>
            </div>)}

            {modalJardimCidade && (<div>
                <div onClick={closeModalJardimCidade} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white rounded-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-end pt-4 pr-4">
                            <X className="text-gray-600 hover:text-gray-800 cursor-pointer z-50" onClick={closeModalJardimCidade}></X>
                        </div>
                        <div className="px-6 md:px-10 max-w-[900px]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl md:text-2xl font-bold">Jardim Cidade de Florianópolis, São José - SC</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mt-6 md:mt-8">
                                <div className="w-full md:w-1/2">
                                    <img src={JardimCidade} alt="Imagem da Serraria" className="w-full mb-4 rounded-xl shadow-lg" />
                                </div>
                                <div className="text-justify flex flex-col gap-2 w-full md:w-1/2">
                                    <div>
                                    <span className="font-semibold text-lg md:text-xl">Região: </span><span className="text-lg md:text-xl">Jardim Solemar</span>
                                    </div>
                                        <div className="text-justify">
                                        <span className="text-sm md:text-base">O Jardim Solemar é uma comunidade localizada em São José, dentro
                                            do bairro Jardim Cidade de Florianópolis. A região surgiu a partir
                                            de ocupações informais e, com o passar dos anos, foi se transformando
                                            em um espaço consolidado, marcado por moradias simples e grande senso
                                            de vizinhança. Apesar de enfrentar desafios relacionados à infraestrutura
                                            e ao acesso a serviços públicos, o local é conhecido pela forte presença
                                            comunitária e pelas iniciativas locais que buscam melhorar o cotidiano
                                            dos moradores. Projetos de regularização e pequenas obras vêm sendo
                                            implementados de forma gradual, reforçando a integração do Jardim
                                            Solemar ao tecido urbano da cidade e valorizando sua história como
                                            parte viva de São José.</span>
                                        </div>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-8 pb-6 text-end w-full flex justify-end gap-1">
                                <Link to="/dashboard" state={{ openJardimCidade: true }} className="flex items-center gap-1 hover:bg-gray-50 p-2 rounded-xl duration-300 hover:translate-x-2 text-sm md:text-base"><span className="font-semibold">Ver os dados do bairro </span><ArrowRight className="font-semibold size-4 md:size-5" /></Link>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>)}
        </>
    )
}