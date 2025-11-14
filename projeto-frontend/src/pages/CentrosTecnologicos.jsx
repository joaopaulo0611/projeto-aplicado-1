import { React } from "react";
import Navbar from "../components/Navbar";
import Acate from '/images/acate.png'
import Citesj from '/images/citesj.png'
import Footer from "../components/Footer";

export default function CentroTecnologicos() {

    return (
        <>
            <Navbar />
            <div className="text-black pt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Centros Tecnológicos</span>
                <span>Descubra os principais centros tecnologicos da cidade de São José - SC</span>
            </div>
            <div className="pb-24">
                <div>
                    <div className="px-52 mt-24 border-gray-200">
                        <div className="border-1 hover:shadow-xl transition duration-200 border-gray-100 bg-white shadow-md flex flex-col gap-5 px-10 pb-10 pt-8 rounded-2xl">
                            <div className="">
                                <div>
                                    <span className="text-xl font-bold">ACATE | Centro de Inovação</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-6">
                                <div className="w-100 h-64 flex-shrink-0">
                                    <img src={Acate} alt="Imagem do centro tecnologico ACATE" className="w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div>
                                <span>TEXTO SOBRE ACATE</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="px-52 mt-24 border-gray-200">
                        <div className="border-1 hover:shadow-xl transition duration-200 border-gray-100 bg-white shadow-md flex flex-col gap-5 px-10 pb-10 pt-8 rounded-2xl">
                            <div className="">
                                <div>
                                    <span className="text-xl font-bold">Centro de Inovação e Tecnologia Educacional (Citesj)</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-6">
                                <div className="w-100 h-64 flex-shrink-0">
                                    <img src={Citesj} alt="Imagem do centro tecnologico CITESJ" className="w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div>
                                <span>TEXTO SOBRE Citesj</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}