import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    const location = useLocation();
    const neighborhoodSelected = location.state;

    const [isOpenTabSerraria, setIsOpenTabSerraria] = useState(true);
    const [isOpenTabPedregal, setIsOpenTabPedregal] = useState(false);
    const [isOpenTabJardimCidade, setIsOpenTabJardimCidade] = useState(false);

    useEffect(() => {
        if (neighborhoodSelected?.openPedregal) {
            setIsOpenTabPedregal(true);
            setIsOpenTabSerraria(false);
            setIsOpenTabJardimCidade(false);
        } else if (neighborhoodSelected?.openJardimCidade) {
            setIsOpenTabJardimCidade(true);
            setIsOpenTabSerraria(false);
            setIsOpenTabPedregal(false);
        }
    }, [neighborhoodSelected]);

    function OpenTabSerraria() {
        setIsOpenTabSerraria(true);
        setIsOpenTabPedregal(false);
        setIsOpenTabJardimCidade(false);
    }

    function OpenTabPedregal() {
        setIsOpenTabPedregal(true);
        setIsOpenTabSerraria(false);
        setIsOpenTabJardimCidade(false);
    }

    function OpenTabJardimCidade() {
        setIsOpenTabJardimCidade(true);
        setIsOpenTabSerraria(false);
        setIsOpenTabPedregal(false);
    }

    return (
        <>
            <Navbar />
            <div className="text-black mt-24 md:mt-32 px-6 md:px-20 flex flex-col gap-1">
                <span className="text-2xl md:text-3xl font-bold">Dashboard</span>
                <span className="text-sm md:text-base">Analise todos os dados que nossa equipe coletou </span>
            </div>
            <div className="px-4 md:px-20 mt-1">
                <div className="px-1 md:px-2 gap-1 md:gap-2 py-1 md:py-2 mt-6 md:mt-10 mb-12 md:mb-32 text-black flex flex-row justify-center rounded-2xl md:rounded-[32px] bg-gray-50 overflow-x-auto">
                    <span onClick={OpenTabSerraria} className={isOpenTabSerraria ? ("w-1/3 min-w-[100px] text-center p-2 bg-blue-800 rounded-2xl md:rounded-[32px] font-bold text-white text-xs md:text-base") : ("w-1/3 min-w-[100px] text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-2xl md:rounded-[32px] font-bold text-gray-500 transition duration-100 cursor-pointer text-xs md:text-base")}>
                        Bairro 1
                    </span>
                    <span onClick={OpenTabPedregal} className={isOpenTabPedregal ? ("w-1/3 min-w-[100px] text-center p-2 bg-blue-800 rounded-2xl md:rounded-[32px] font-bold text-white text-xs md:text-base") : ("w-1/3 min-w-[100px] text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-2xl md:rounded-[32px] font-bold text-gray-500 transition duration-100 cursor-pointer text-xs md:text-base")}>
                        Bairro 2
                    </span>
                    <span onClick={OpenTabJardimCidade} className={isOpenTabJardimCidade ? ("w-1/3 min-w-[100px] text-center p-2 bg-blue-800 rounded-2xl md:rounded-[32px] font-bold text-white text-xs md:text-base") : ("w-1/3 min-w-[100px] text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-2xl md:rounded-[32px] font-bold text-gray-500 transition duration-100 cursor-pointer text-xs md:text-base")}>
                        Bairro 3
                    </span>
                </div>
            </div>

            <div className="px-4 md:px-20 mb-12">
                {isOpenTabSerraria && (
                    <div className="text-center py-20">
                        <div className="text-gray-600">Bairro 1 aberto</div>
                    </div>
                )}

                {isOpenTabPedregal && (
                    <div className="text-center py-20">
                        <div className="text-gray-600">Bairro 2 aberto</div>
                    </div>
                )}

                {isOpenTabJardimCidade && (
                    <div className="text-center py-20">
                        <div className="text-gray-600">Bairro 3 aberto</div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}