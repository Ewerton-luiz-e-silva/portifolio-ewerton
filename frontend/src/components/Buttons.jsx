import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Certifique-se de importar os ícones do Bootstrap
import "./css/contato.css"; // Importe o CSS correspondente 
import "./css/style.css";
import "./css/clash-grotesk.css"; 

const Buttons = () => {
const [showButtons, setShowButtons] = useState(false);

useEffect(() => {
    // Função que vai verificar a posição da rolagem da página
    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aboutSection = document.getElementById("sobre");

    // Verifica se a sessão "sobre" foi alcançada
    if (aboutSection && scrollPosition >= aboutSection.offsetTop + aboutSection.offsetHeight) {
        setShowButtons(true);
    } else {
        setShowButtons(false);
    }
    };

    // Adiciona o evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Remove o evento de rolagem ao desmontar o componente
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-toggle");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
    <>
    {showButtons && (
        <>
        {/* Botão de Alternar Tema */}
        <button id="theme-toggle" className="theme-btn" onClick={toggleTheme}>
            🌙
        </button>

        {/* Botão Voltar ao Topo */}
        <div id="backToTop" className="fixed-button" onClick={scrollToTop}>
            <i className="bi bi-chevron-up"></i>
        </div>

        {/* Botão WhatsApp */}
        <div id="whatsappButton" className="fixed-button">
            <a href="https://wa.me/5519999934920" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"></i>
            </a>
        </div>
        </>
    )}
    </>
);
};

export default Buttons;