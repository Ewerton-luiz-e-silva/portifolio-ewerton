import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Servicos from './components/Servicos';
import FreeYourMind from './components/FreeYourMind';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./components/css/style.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowBackToTop(true);
        setShowWhatsapp(true); // Exibe o botão WhatsApp após o scroll
      } else {
        setShowBackToTop(false);
        setShowWhatsapp(false); // Esconde o botão WhatsApp quando não estiver na posição
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Inicio />
      <Sobre />
      <Skills />
      <Servicos />
      <FreeYourMind />
      <Portfolio />
      <Contato />
      <Footer />

      {/* Botão Voltar ao Topo */}
      {showBackToTop && (
        <div
          id="backToTop"
          className="fixed-button"
          onClick={handleBackToTop}
          style={{ display: 'flex', opacity: 1 }}
        >
          <i className="bi bi-chevron-up"></i>
        </div>
      )}

      {/* Botão WhatsApp */}
      {showWhatsapp && (
        <div 
          id="whatsappButton" 
          className="fixed-button" 
          style={{ display: 'flex', opacity: 1 }} // Mostra o botão WhatsApp
        >
          <a href="https://wa.me/5519999934920" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
