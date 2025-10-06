// src/components/Portfolio.jsx
import React from 'react';

// Importe cada imagem e PDF diretamente no código.
import idVisual1 from '/imagens/id-visual-1.png';
import idVisual2 from '/imagens/id-visual-2.png';
import idVisual3 from '/imagens/id-visual-3.png';
import pdfHOD from '/imagens/HOD.pdf';
import pdfBerchmans from '/imagens/Berchmans.pdf';
import pdfBarukTribe from '/imagens/BarukTribe.pdf';

// --- Dados dos Projetos ---
const visualIdentityProjects = [
  {
    image: idVisual1, // Use a variável importada.
    title: 'Identidade Visual - HOD',
    url: pdfHOD,
    isPdf: true,
  },
  {
    image: idVisual2,
    title: 'Identidade Visual - Berchmans',
    url: pdfBerchmans,
    isPdf: true,
  },
  {
    image: idVisual3,
    title: 'Identidade Visual - Baruk Tribe',
    url: pdfBarukTribe,
    isPdf: true,
  },
];

const webDesignProjects = [];

// --- Componente do Card (Não precisa de alteração) ---
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

// --- Componente Principal (Não precisa de alteração) ---
const Portfolio = () => {
  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="projetos">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          MEU <span className="text-[#9100fe]">PORTFÓLIO.</span>
        </h2>
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
