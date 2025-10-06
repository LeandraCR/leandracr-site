// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="inicio">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Lado do Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            DESENHANDO EXPERIÊNCIAS ÚNICAS<br />QUE CONECTAM USUÁRIOS E MARCAS
            <span className="text-[#9100fe]">.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Experiência do usuário vai além do visual. Através de pesquisa, empatia e design estratégico, crio interfaces intuitivas, acessíveis e que realmente funcionam.
          </p>
          <a
            href="https://wa.me/5533998529357?text=Oi%2C%20tudo%20bem%3F%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block" // Importante para o botão não ocupar a largura toda
          >
            <button className="py-3 px-8 bg-[#9100fe] text-white text-lg font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#9100fe]/40 transition-all duration-300">
              Entre em contato
            </button>
          </a>
        </div>

        {/* Lado da Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <img src={`${import.meta.env.BASE_URL}imagens/Pessoa.png`}
              alt="Leandra Ramos"
              // Tailwind não tem uma classe para clip-path, então usamos uma propriedade arbitrária
              className="[clip-path:polygon(25%_0%,_75%_0%,_100%_50%,_75%_100%,_25%_100%,_0%_50%)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;