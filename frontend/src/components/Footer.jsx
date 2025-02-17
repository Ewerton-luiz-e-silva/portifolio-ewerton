import React from "react";
import "./css/footer.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css"; 

import logo from './img/SUA-LOGO-AQUI.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            {/* Logo */}
            <div className="footer-column logo-column">
                <img src={logo} alt="Logo" />
            </div>

            {/* Menu e Redes Sociais */}
            <div className="container-footer">
                <div className="footer-links">
                    {/* Menu de Navegação */}
                    <nav className="footer-nav">
                        <a href="#inicio">Início <i class="bi bi-house-fill"></i></a>
                        <a href="#sobre">Sobre <i class="bi bi-file-person-fill"></i></a>
                        <a href="#skills">Skills <i class="bi bi-file-person-fill"></i></a>
                        <a href="#servicos">Serviços <i class="bi bi-journal-code"></i></a>
                        <a href="#portfolio">Portfolio <i class="bi bi-code-slash"></i></a>
                        <a href="#contato">Contato <i class="bi bi-chat-left-dots-fill"></i></a>
                    </nav>

                    {/* Redes Sociais */}
                    <ul className="social-links">
                        <li>
                            <a href="https://www.instagram.com/ewertonluizesilva?igsh=Zmh3aTVsNXZkYThj&utm_source=qr"
                                target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Ewerton-luiz-e-silva"
                                target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:ewerton.luiz_1994@hotmail.com?subject=E-mail"
                                target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-envelope"></i> Enviar Email
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ewerton-luiz-e-silva-63b0a42b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Créditos */}
            <div className="footer-column credits-column">
                <p>Ficarei feliz em saber mais sobre seus projetos e como podemos trabalhar juntos para torná-los realidade.</p>
                <br />
                <p>&copy; 2024 Todos os direitos reservados.</p>
                <p>Desenvolvido Por Ewerton Luiz e Silva.</p>
            </div>
        </footer>
    );
};

export default Footer;