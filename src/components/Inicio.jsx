import React from "react";
import "./css/inicio.css"; // Importe o CSS correspondente
import "./css/style.css";


const Inicio = () => {
return (
    <main id="inicio" className="inicio">
    <div className="container-inicio">
        <div className="conteudo-inicio" data-aos="fade-up" data-aos-duration="1000">
        {/* Título */}
        <div className="titulo-inicio">
            <h1>Ewerton Luiz e Silva</h1>
            <h1 className="destaque-inicio">Desenvolvedor em ascensão</h1>
        </div>

        {/* Parágrafo */}
        <div className="paragrafo-inicio" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p>
            Sou um desenvolvedor web iniciante, motivado a aprender e evoluir em um campo dinâmico.
            Com conhecimentos em HTML, CSS e JavaScript, e estou disposto a expandir para outras tecnologias,
            como frameworks de front-end, back-end e bancos de dados. Sou dedicado, criativo e focado em encontrar
            soluções inovadoras para os desafios de desenvolvimento.
            Acredito que feedbacks são fundamentais para o meu crescimento profissional.
            Estou comprometido em me tornar um desenvolvedor versátil e destaco, buscando constantemente aprendizado
            e projetos desafiadores para melhorar minhas habilidades.
            </p>
        </div>

        {/* Botões de Ação */}
        <a href="#contato" className="cta" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <span>Fale Comigo</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </a>
        <a
            href="./assets/Documento/Ewerton.pdf"
            className="cta curriculo"
            download
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <span>
            Baixar Currículo <i className="bi bi-download"></i>
            </span>
            <svg width="15px" height="20px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </a>
        </div>

        {/* Complemento (Comentado) */}
        {/* 
        <div className="complemento-inicio">
        <img className="text" src="assets/img/Gif 01.gif" alt="Texto animado" />
        <img className="qr-code" src="assets/img/qr_code_rmdeveloper.png" alt="QR Code para link bio" />
        </div> 
        */}
    </div>
    </main>
);
};

export default Inicio;