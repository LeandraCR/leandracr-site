// src/components/Portfolio.jsx
import React from 'react';

// ===================================================================
// DADOS DOS PROJETOS
// ===================================================================
const visualIdentityProjects = [
  {
    image: `${import.meta.env.BASE_URL}imagens/id-visual-3.png`,
    title: 'Baruk Tribe',
    description: 'Criação de branding para uma empresa de software e marketing, focada em performance e inovação.',
    url: `${import.meta.env.BASE_URL}imagens/BarukTribe.pdf`,
    isPdf: true
  },
  {
    image: `${import.meta.env.BASE_URL}imagens/id-visual-1.png`,
    title: 'HOD',
    description: 'Desenvolvimento de marca para uma plataforma de CRM (Customer Relationship Management).',
    url: `${import.meta.env.BASE_URL}imagens/HOD.pdf`,
    isPdf: true
  },
  {
    image: `${import.meta.env.BASE_URL}imagens/id-visual-2.png`,
    title: 'Berchmans',
    description: 'Projeto de identidade visual para uma rede de postos de gasolina, transmitindo confiança e modernidade.',
    url: `${import.meta.env.BASE_URL}imagens/Berchmans.pdf`,
    isPdf: true
  },
];

const webDesignProjects = [
  // Adicione seus projetos de telas aqui quando tiver
];

// --- Componente do Card (com proporções ajustadas) ---
const ProjectCard = ({ image, title, description, url, isPdf }) => {
  const linkProps = isPdf ? { download: true } : {};
  const actionText = isPdf ? "Clique para baixar" : "Clique para ver o projeto"; // Texto já corrigido

  return (
    <div className="group bg-[#0a062e] rounded-2xl overflow-hidden shadow-lg shadow-[#9100fe]/20 transform hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        {...linkProps}
      >
        {/* Altura da imagem aumentada para dar mais destaque */}
        <div className="h-64 overflow-hidden"> 
          <img 
            src={image} 
            alt={`Capa do projeto ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </a>
      {/* Padding e altura do parágrafo diminuídos para uma área de texto mais compacta */}
      <div className="p-5">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm mb-4 h-14">{description}</p>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          {...linkProps}
          className="text-[#9100fe] font-semibold hover:underline"
        >
          {actionText}
        </a>
      </div>
    </div>
  );
};


// --- Componente Principal do Portfólio ---
const Portfolio = () => {
  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="projetos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          MEU <span className="text-[#9100fe]">PORTFÓLIO.</span>
        </h2>
        
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">Identidade Visual</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {visualIdentityProjects.map((project, index) => (
              <ProjectCard key={`id-${index}`} {...project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">Telas e Interfaces</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {webDesignProjects.length > 0 ? (
              webDesignProjects.map((project, index) => (
                <ProjectCard key={`web-${index}`} {...project} />
              ))
            ) : (
              <p className="text-gray-400 text-center md:text-left">Novos projetos de UI/UX em breve...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;