// src/components/Specialties.jsx
import React from 'react';
// Importando os ícones da biblioteca correta: Bootstrap Icons (bs)
import { BsCodeSlash, BsPalette, BsFileEarmarkText, BsSearch, BsLayoutTextWindow, BsGrid1X2, BsDisplay, BsClipboardCheck, BsWindow } from 'react-icons/bs';
// Um componente para o Card, para não repetir código
const SpecialtyCard = ({ icon, title, text }) => {
  return (
    <div className="text-center p-8 border-2 border-gray-800 hover:border-[#9100fe] hover:scale-105 transition-all duration-300 rounded-2xl bg-[#0a062e]">
      <div className="text-[#9100fe] text-7xl inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
};

const Specialties = () => {
  // Dados com os ícones corretos (prefixo Bs)
  const specialtiesData = [
    { icon: <BsCodeSlash />, title: "Implementação Front-end", text: "Criação da interface visual com HTML, CSS e JavaScript, tornando o design interativo e funcional." },
    { icon: <BsPalette />, title: "Identidade Visual Digital", text: "Elementos visuais que traduzem a personalidade da marca no digital com coesão e estilo." },
    { icon: <BsFileEarmarkText />, title: "Landing Pages", text: "Páginas focadas em conversão com estrutura clara e design atrativo." },
    { icon: <BsSearch />, title: "Pesquisa com Usuários", text: "Entendimento das necessidades reais através de entrevistas e testes." },
    { icon: <BsLayoutTextWindow />, title: "Wireframes e Prototipagem", text: "Esboços e protótipos navegáveis para validar ideias antes do desenvolvimento." },
    { icon: <BsGrid1X2 />, title: "Design System", text: "Padrões visuais consistentes para manter a identidade em todos os produtos." },
    { icon: <BsDisplay />, title: "Design Responsivo", text: "Interfaces que se adaptam a qualquer tela: desktop, tablet ou celular." },
    { icon: <BsClipboardCheck />, title: "Testes de Usabilidade", text: "Avaliação real de uso para melhorar a experiência e eficiência." },
    { icon: <BsWindow />, title: "Design de Interfaces (UI)", text: "Layouts modernos e intuitivos que tornam o uso mais agradável." },
  ];

  return (
    <section className="bg-[#040024] py-20 px-4 sm:px-6 lg:px-8" id="especialidades">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          MINHAS <span className="text-[#9100fe]">ESPECIALIDADES.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialtiesData.map((spec, index) => (
            <SpecialtyCard key={index} icon={spec.icon} title={spec.title} text={spec.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;