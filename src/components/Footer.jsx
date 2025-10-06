// src/components/Footer.jsx
import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub, BsEnvelopeAt } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t-2 border-[#9100fe]/30">
      <div className="max-w-7xl mx-auto">
        {/* Parte de cima: Logo e Redes Sociais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <img className="h-16" src="/imagens/Logo.png" alt="Logo da LeandraCR" />
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/lee.ramss/" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full text-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/leandra-costa-ramos-501462233/" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full text-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
              <BsLinkedin />
            </a>
            <a href="https://github.com/LeandraCR" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full text-2xl hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
              <BsGithub />
            </a>
          </div>
        </div>

        {/* Parte de baixo: E-mail */}
        <div className="text-center text-gray-400">
          <a href="mailto:lee.ramss15@gmail.com" className="flex items-center justify-center gap-2 hover:text-[#9100fe] transition-colors">
            <BsEnvelopeAt className="text-xl" />
            <span>lee.ramss15@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;