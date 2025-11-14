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
            <div className="text-black mt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Dashboard</span>
                <span>Analise todos os dados que nossa equipe coletou </span>
            </div>
            <div className="px-20 mt-1">
                <div className="px-2 gap-2 py-2 mt-10 mb-32 text-black flex flex-row justify-center rounded-4xl bg-gray-50">
                    <span onClick={OpenTabSerraria} className={isOpenTabSerraria ? ("w-1/3 text-center p-2 bg-blue-800 rounded-4xl font-bold text-white") : ("w-1/3 text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-4xl font-bold text-gray-500 ransition duration-100 cursor-pointer")}>
                        Bairro 1
                    </span>
                    <span onClick={OpenTabPedregal} className={isOpenTabPedregal ? ("w-1/3 text-center p-2 bg-blue-800 rounded-4xl font-bold text-white") : ("w-1/3 text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-4xl font-bold text-gray-500 transition duration-100 cursor-pointer")}>
                        Bairro 2
                    </span>
                    <span onClick={OpenTabJardimCidade} className={isOpenTabJardimCidade ? ("w-1/3 text-center p-2 bg-blue-800 rounded-4xl font-bold text-white") : ("w-1/3 text-center p-2 bg-gray-50 hover:bg-gray-200 rounded-4xl font-bold text-gray-500 transition duration-100 cursor-pointer")}>
                        Bairro 3
                    </span>
                </div>
            </div>

            {isOpenTabSerraria && (
                <div>
                    <div>Bairro 1 aberto</div>
                </div>
            )}

            {isOpenTabPedregal && (
                <div>
                    <div>Bairro 2 aberto</div>
                </div>
            )}

            {isOpenTabJardimCidade && (
                <div>
                    <div>Bairro 3 aberto</div>
                </div>
            )}
        </>
    )
}