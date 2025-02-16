import React from "react";
import "./css/sobre-mim.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css"; 


import ewertonImg from './img/Ewerton.png';
import textoGiratorioImg from './img/texto-giratorio.png';

const Sobre = () => {
return (
    <section id="sobre" className="sobre">
    <div className="container-sobre">
        {/* Slide Sobre */}
        <div className="headline-sobre" data-aos="fade-up" data-aos-duration="1000">
        <div className="headline-scroll" id="headline-scroll">
            {Array(3).fill(null).map((_, index) => (
            <React.Fragment key={index}>
                <span className="bold">SOBRE</span>
                <span className="divisor"></span>
                <span className="light">MIM</span>
                <span className="divisor"></span>
            </React.Fragment>
            ))}
        </div>
        </div>

        {/* Conteúdo Sobre */}
        <div className="conteudo-sobre">
        {/* Lado Esquerdo */}
        <div className="left-sobre" data-aos="fade-right" data-aos-duration="1000">
            <div className="textos-sobre">
            <h1>Olá, Meu nome é Ewerton</h1>
            <p>
                Com 29 anos, decidi finalmente seguir minha paixão e me aventurar no mundo do desenvolvimento.
                Mesmo sendo novo na área, estou determinado a aprender e me aprimorar, buscando conhecimento e experiência
                para me tornar um profissional competente e bem-sucedido.
                Estou cursando Análise e Desenvolvimento de Sistemas, e também um curso de Full Stack Java, para obter mais conhecimentos.
                Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre meu trabalho?
            </p>
            </div>
            <div className="redes-sociais space-y-4">
                    <a href="https://www.instagram.com/ewertonluizesilva?igsh=Zmh3aTVsNXZkYThj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <i className="bi bi-instagram"></i> INSTAGRAM
                        <i className="bi bi-arrow-right ml-auto"></i>
                    </a>

                    <a href="https://github.com/Ewerton-luiz-e-silva" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <i className="bi bi-github"></i> GITHUB
                        <i className="bi bi-arrow-right ml-auto"></i>
                    </a>

                    <a href="mailto:ewerton.luiz_1994@hotmail.com?subject=E-mail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"> 

                        <i className="bi bi-envelope"></i> ENVIAR-EMAIL
                        <i className="bi bi-arrow-right ml-auto"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/ewerton-luiz-e-silva-63b0a42b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" >
                        <i className="bi bi-linkedin"></i> LINKEDIN
                        <i className="bi bi-arrow-right ml-auto"></i>
                    </a>
                </div>
        </div>

        {/* Lado Direito */}
        <div className="right-sobre" data-aos="fade-left" data-aos-duration="1000">
        <div className="imagem-sobre imagem-container">
            <img src={ewertonImg} alt="Ewerton Luiz e Silva" />
        </div>
        <div className="complemento-sobre">
            <img src={textoGiratorioImg} alt="Texto giratório" />
        </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default Sobre;