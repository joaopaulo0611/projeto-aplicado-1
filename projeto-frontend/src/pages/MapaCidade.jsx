import { useState, React } from "react";
import Navbar from "../components/Navbar";
import MapaSJ from '/images/mapaSJ.png'
import { X } from 'lucide-react';

export default function MapaCidade() {

    const [modalSerraria, setModalSerraria] = useState(false);

    function openModalSerraria() {
        setModalSerraria(true);
    }
    function closeModalSerraria() {
        setModalSerraria(false);
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
                <div onClick={openModalSerraria} className="mt-56 ml-56 absolute shadow2xl bg-red-600/60 p-3 rounded-4xl hover:bg-red-600/80 cursor-pointer"></div>
                <div onClick={openModalSerraria} className="mt-58 ml-80 absolute shadow2xl bg-red-600/60 p-3 rounded-4xl hover:bg-red-600/80 cursor-pointer"></div>
            </div>

            {modalSerraria ? (<div>
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-gray-800/70  rounded-4xl p-3 cursor-pointer" onClick={closeModalSerraria}>
                        <X className=" text-white hover:text-gray-400"></X>
                    </div>
                </div>
            </div>) : (
                <div></div>)}


        </>
    )
}