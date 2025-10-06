// src/components/Header.jsx
import React, { useState } from 'react'; // 1. Importamos o 'useState' para controlar o estado (aberto/fechado)
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // 2. Importamos os ícones de menu e 'X' (de outra biblioteca de ícones)

const Header = () => {
  // 3. Criamos o estado que vai guardar a informação se o menu mobile está aberto ou não
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    className: "text-gray-400 hover:text-white transition duration-300 font-medium cursor-pointer"
  };

  const mobileLinkProps = {
    ...linkProps,
    className: "text-4xl text-gray-300 hover:text-white transition duration-300",
    // Quando um link for clicado no menu mobile, fechamos o menu
    onClick: () => setIsMenuOpen(false)
  };

  return (
    <>
      <header className="bg-[#040024] py-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logotipo */}
          <div>
            <a href="#">
              <img className="h-16" src={`${import.meta.env.BASE_URL}imagens/Logo.png`} alt="Logo da LeandraCR" />
            </a>
          </div>

          {/* Menu de Navegação para DESKTOP (o que já existia) */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-10">
              <li><Link to="inicio" {...linkProps}>Início</Link></li>
              <li><Link to="especialidades" {...linkProps}>Especialidades</Link></li>
              <li><Link to="sobre" {...linkProps}>Sobre</Link></li>
              <li><Link to="projetos" {...linkProps}>Projetos</Link></li>
            </ul>
          </nav>

          {/* Botão de Contato para DESKTOP */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5533998529357?text=Oi%2C%20tudo%20bem%3F%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-2.5 px-10 bg-[#9100fe] text-white text-lg font-semibold rounded-full hover:scale-105 ...">
                Contato
              </button>
            </a>
          </div>

          {/* Botão do Menu Hambúrguer para MOBILE (só aparece em telas pequenas) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <HiX className="text-white h-8 w-8" />
              ) : (
                <HiMenuAlt3 className="text-white h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ================================================= */}
      {/* ============ O MENU MOBILE EM SI ================ */}
      {/* (Ele fica escondido por padrão e só aparece quando isMenuOpen é true) */}
      {/* ================================================= */}
      <div className={`
        md:hidden fixed top-0 left-0 w-full h-screen bg-[#040024] z-40
        flex flex-col items-center justify-center gap-8
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <ul className="flex flex-col items-center gap-8">
          <li><Link to="inicio" {...mobileLinkProps}>Início</Link></li>
          <li><Link to="especialidades" {...mobileLinkProps}>Especialidades</Link></li>
          <li><Link to="sobre" {...mobileLinkProps}>Sobre</Link></li>
          <li><Link to="projetos" {...mobileLinkProps}>Projetos</Link></li>
        </ul>
        <a
          href="https://wa.me/5533998529357?text=Oi%2C%20tudo%20bem%3F%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          <button className="py-3 px-12 bg-[#9100fe] text-white text-xl font-semibold rounded-full hover:scale-105 ...">
            Contato
          </button>
        </a>
      </div>
    </>
  );
};

export default Header;