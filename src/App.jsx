// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Specialties from './components/Specialties.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import ContactForm from './components/ContactForm.jsx'; // 1. Importe o formulário
import Footer from './components/Footer.jsx';       // 2. Importe o rodapé

function App() {
  return (
    <div className="bg-[#040024] text-white"> {/* Adicionei text-white aqui */}
      <Header />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Portfolio />
        <ContactForm /> {/* 3. Adicione */}
      </main>
      <Footer /> {/* 4. Adicione */}
    </div>
  );
}

export default App;