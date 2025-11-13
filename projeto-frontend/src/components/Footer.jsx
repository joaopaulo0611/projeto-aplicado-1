import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <>
        {/* Footer */}
      <footer className='mt-auto bg-gradient-to-br from-blue-800 to-blue-700 text-white'>
        <div className='w-9/10 mx-auto px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-24'>

            {/* Logo e Descrição */}
            <div className='md:col-span-1'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='font-bold text-xl'>Projeto Aplicado</span>
              </div>
              <p className='text-blue-200 text-sm'>
                Projeto Aplicado I desenvolvido em parceria com o Prototipando a Quebrada (PAQ)
              </p>
            </div>

            {/* Navegação Rápida */}
            <div>
              <h3 className='font-bold text-lg mb-4'>Navegação Rápida</h3>
              <ul className='space-y-2 text-blue-200'>
                <li>
                  <a href='#sobre' className='hover:text-white transition-colors duration-200'>Início</a>
                </li>
                <li>
                  <a href='#projeto' className='hover:text-white transition-colors duration-200'>Nosso Projeto</a>
                </li>
                <li>
                  <a href='#equipe' className='hover:text-white transition-colors duration-200'>Equipe</a>
                </li>
                <li>
                  <Link to='/mapa-da-cidade' className='hover:text-white transition-colors duration-200'>Mapa da Cidade</Link>
                </li>
                <li>
                  <Link to='/centros-tecnologicos' className='hover:text-white transition-colors duration-200'>Centros Tecnológicos</Link>
                </li>
                <li>
                  <Link to='/dashboard' className='hover:text-white transition-colors duration-200'>Dashboard</Link>
                </li>
              </ul>
            </div>

            {/* Acesso Rápido */}
            <div>
              <h3 className='font-bold text-lg mb-4'>Contatos</h3>
              <ul className='space-y-2 text-blue-200'>
                <li>
                  joaopaulocappeletti06@gmail.com
                </li>
                <li>
                  matheus_silva-cruz@estudante.sesisenai.org.br
                </li>
                <li>
                 mello.nicolasandre@gmail.com
                </li>
                <li>
                 rafagmk@gmail.com
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <div className='space-y-3 text-blue-200 text-sm mt-10'>
                <div>
                  <p className='font-semibold text-white mb-1'>Instituição</p>
                  <p>UNISENAI - Florianópolis, SC</p>
                </div>
                <div>
                  <p className='font-semibold text-white mb-1'>Parceiro</p>
                  <a href='https://prototipandoaquebrada.org/' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors duration-200'>
                    Prototipando a Quebrada
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className='border-t border-blue-600 mt-12 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <p className='text-blue-200 text-sm text-center md:text-left'>
                © 2025 Projeto Aplicado I.
              </p>
              <div className='flex gap-6 text-sm text-blue-200'>
                <span>Desenvolvido por estudantes do curso de Ciência de Dados e Inteligência Atificial do UNISENAI.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}