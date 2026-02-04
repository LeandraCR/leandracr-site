// src/components/About.jsx
import React from 'react';
import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si';

const About = () => {
    return (
        <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="sobre">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Lado da Imagem - Ajustado para preencher o contêiner perfeitamente */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-[#9100fe]/30 border border-white/10">
                        <img 
                            src={`${import.meta.env.BASE_URL}imagens/Foto.png`}
                            alt="Foto de Leandra Ramos"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* Lado do Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white leading-tight mb-4">
                        MUITO PRAZER, <br />
                        <span className="text-[#9100fe]">SOU LEANDRA RAMOS.</span>
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Olá! Sou uma estudante de Engenharia de Software no 7º período, tenho 22 anos e sou de Belo Horizonte, MG.
                    </p>
                    <p className="text-gray-300 mb-8">
                        Apaixonada por tecnologia e design, me especializo em front-end, UI/UX e prototipagem. Meu foco é criar interfaces modernas, responsivas e intuitivas, sempre priorizando a experiência do usuário. Dedico-me a cada etapa do processo criativo, transformando ideias em telas funcionais e visualmente impactantes.
                    </p>

                    {/* Ícones de Redes Sociais */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="https://www.instagram.com/lee.ramss/" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
                            <SiInstagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/leandra-costa-ramos-501462233/" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
                            <SiLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/LeandraCR" target="_blank" rel="noopener noreferrer" className="text-white bg-[#9100fe] p-4 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
                            <SiGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;