import React from "react";
import Navbar from "./Navbar";

export default function MapaCidade() {


    return (
        <>
            <Navbar/>
            <div className="text-black mt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Mapa da cidade de São José</span>
                <span>O mapa exibe os principais bairros e regiões mais vulnerabilizados da cidade de São José-SC</span>
            </div>
            <div className="flex justify-center mt-10 pb-10">
                <img src="/images/mapaSJ.png" alt="Mapa da cidade de São José" className="cursor-pointer w-150 border hover:shadow-xl transition duration-200 border-gray-200 rounded-2xl shadow-md h-auto mt-6"/>
            </div>
        </>
    )
}