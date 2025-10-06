// src/components/Portfolio.jsx
import React from 'react';

// ===================================================================
// Seção de projetos de Identidade Visual (PDFs) - CAMINHOS CORRIGIDOS!
// ===================================================================
const visualIdentityProjects = [
  {
    image: '/leandracr-site/imagens/id-visual-1.png',
    title: 'Identidade Visual - HOD',
    url: '/leandracr-site/imagens/HOD.pdf',
    isPdf: true,
  },
  {
    image: '/leandracr-site/imagens/id-visual-2.png',
    title: 'Identidade Visual - Berchmans',
    url: '/leandracr-site/imagens/Berchmans.pdf',
    isPdf: true,
  },
  {
    image: '/leandracr-site/imagens/id-visual-3.png',
    title: 'Identidade Visual - Baruk Tribe',
    url: '/leandracr-site/imagens/BarukTribe.pdf',
    isPdf: true,
  },
];

// ===================================================================
// (Exemplo futuro) Seção de Telas, Sites, Landing Pages, etc.
// ===================================================================
const webDesignProjects = [
  // {
  //   image: '/leandracr-site/imagens/tela-site-1.png',
  //   title: 'Landing Page para Startup',
  //   url: 'https://link-para-o-site.com',
  //   isPdf: false,
  // },
];

// --- Componente do Card ---
const ProjectCard = ({ image, title, url, isPdf }) => {
  const linkProps = isPdf ? { download: true } : {};
  const subtitle = isPdf ? 'Clique para baixar o PDF' : 'Clique para ver o projeto';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...linkProps}
      className="group relative block w-full max-w-sm h-96 rounded-2xl overflow-hidden shadow-lg shadow-[#9100fe]/20 transform hover:-translate-y-2 transition-transform duration-300"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
        <h3 className="text-white text-2xl text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
          <span className="block text-sm font-normal mt-2">{subtitle}</span>
        </h3>
      </div>
    </a>
  );
};

// --- Componente Principal ---
const Portfolio = () => {
  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="projetos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          MEU <span className="text-[#9100fe]">PORTFÓLIO.</span>
        </h2>

        {/* Identidade Visual */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">
            Identidade Visual
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {visualIdentityProjects.map((project, index) => (
              <ProjectCard key={`id-${index}`} {...project} />
            ))}
          </div>
        </div>

        {/* Telas e Interfaces */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center md:text-left">
            Telas e Interfaces
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {webDesignProjects.length > 0 ? (
              webDesignProjects.map((project, index) => (
                <ProjectCard key={`web-${index}`} {...project} />
              ))
            ) : (
              <p className="text-gray-400 text-center md:text-left">
                Novos projetos de UI/UX em breve...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
