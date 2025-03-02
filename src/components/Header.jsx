import React, { useState, useEffect } from "react";
import "./css/header.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css";

import logo from './img/SUA-LOGO-AQUI.png';

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isDarkMode, setIsDarkMode] = useState(false);

// Função para alternar o menu hamburguer
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

// Função para alternar o tema claro/escuro
const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
};

// Efeito colateral para aplicar/remover a classe dark-mode no body
useEffect(() => {
    if (isDarkMode) {
    document.body.classList.add("dark-mode");
    } else {
    document.body.classList.remove("dark-mode");
    }
}, [isDarkMode]);

return (
    <div>
    {/* Botão de Alternar Tema */}
    <button id="theme-toggle" className="theme-btn" onClick={toggleTheme}>
        {isDarkMode ? "🌞" : "🌙"}
    </button>

    {/* Botão Voltar ao Topo */}
    <div id="backToTop" className="fixed-button">
        <i className="bi bi-chevron-up"></i>
    </div>

    {/* Botão WhatsApp */}
    <div id="whatsappButton" className="fixed-button">
        <a href="https://wa.me/5519999934920" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
        </a>
    </div>

    {/* Header */}
    <header className="header">
        {/* Logo */}
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>

        {/* Menu Hamburguer */}
        <div className="menu">
        <label className="hamburger">
            <input
            type="checkbox"
            id="menuToggle"
            checked={isMenuOpen}
            onChange={toggleMenu}
            />
            <svg viewBox="0 0 32 32">
            <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
            </svg>
        </label>
        </div>

        {/* Menu Aberto */}
        <div className={`menu-aberto ${isMenuOpen ? "active" : ""}`}>
        <nav className="nav-menu">
            <a href="#inicio" onClick={toggleMenu}>
            INÍCIO <i class="bi bi-house-fill"></i>
            </a>
            <a href="#sobre" onClick={toggleMenu}>
            SOBRE   <i class="bi bi-file-person-fill"></i>
            </a>
            <a href="#skills" onClick={toggleMenu}>
            SKILLS   <i class="bi bi-backpack2"></i>
            </a>
            <a href="#servicos" onClick={toggleMenu}>
            SERVIÇOS <i class="bi bi-journal-code"></i>
            </a>
            <a href="#portfolio" onClick={toggleMenu}>
            PORTFOLIO <i class="bi bi-code-slash"></i>
            </a>
            <a href="#contato" onClick={toggleMenu}>
            CONTATO <i class="bi bi-chat-left-dots-fill"></i>
            </a>
        </nav>
        </div>
    </header>
    {/* Fim Header */}
    </div>
);
};

export default Header;