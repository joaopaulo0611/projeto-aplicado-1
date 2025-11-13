import {  React } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function MapaCidade() {

    return (
        <>
            <Navbar />
            <div className="text-black mt-32 px-20 flex flex-col gap-1">
                <span className="text-3xl font-bold">Dashboard</span>
                <span>Analise todos os dados que nossa equipe coletou </span>
            </div>
        </>
    )
}