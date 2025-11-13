import {  React } from "react";
import Navbar from "../components/Navbar";
import Acate from '/images/acate.png'

export default function CentroTecnologicos() {

    return (
        <>
            <Navbar />
            <div className="text-black pt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Centros Tecnológicos</span>
                <span>Descubra os principais centros tecnologicos da cidade de São José - SC</span>
            </div>
            <div className="flex felx-col gap-12 px-20 mt-24 border-1 border-gray-200">
            <div>
                <div>
                    <span>ACATE | Centro de Inovação</span>
                </div>
                <div>
                    <img src={Acate} alt="Imagem do centro tecnologico ACATE" className="w-100"/>
                </div>
            </div>
            <div>
                <span>TEXTO SOBRE ACATE</span>
            </div>
            </div>
        </>
    )
}