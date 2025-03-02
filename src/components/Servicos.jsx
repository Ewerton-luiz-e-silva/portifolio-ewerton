import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/servicos.css";
import "./css/style.css";

import gifServicos from './img/Gif serviços.gif';

const Servicos = () => {
useEffect(() => {
    AOS.init({
    duration: 500, // Duração das animações
    once: true,     // Animação ocorre apenas uma vez
    });
}, []);

const servicosList = [
    { icon: "bi-display", title: "Desenvolvimento Front-end", delay: 300, side: "left" },
    { icon: "bi-server", title: "Desenvolvimento Back-end", delay: 400, side: "right" },
    { icon: "bi-laptop", title: "Desenvolvimento de Software", delay: 900, side: "left" },
    { icon: "bi-code-slash", title: "Desenvolvimento de Aplicações Web", delay: 500, side: "right" },
    { icon: "bi-lightbulb", title: "Consultoria em Tecnologias Web", delay: 600, side: "left" },
    { icon: "bi-speedometer", title: "Otimização de Performance", delay: 700, side: "right" },
];

return (
    <section id="servicos" className="servicos">
    <div className="container-servicos">
        {/* Título e Descrição */}
        <div className="headline-servicos" data-aos="fade-up">
        <div className="titulo-servicos">
            <h1>
            Serviços {" "}
            <img className="gifs" src={gifServicos} alt="Serviços" data-aos="zoom-in" data-aos-delay="300"/>
            </h1>
        </div>
        <div className="descricao-servicos" data-aos="fade-up" data-aos-delay="200">
            <p id="p-descricao">
            Ofereço uma variedade de serviços para atender às suas necessidades de desenvolvimento web, desde a criação de interfaces até a implementação de soluções completas.
            </p>
        </div>
        </div>

        {/* Cards de Serviços */}
        <div className="servicos-cards">
        {servicosList.map((servico, index) => (
            <div
            key={index}
            className={`card-servicos-${servico.side}`}
            data-aos={servico.side === "left" ? "fade-right" : "fade-left"}
            data-aos-delay={servico.delay}
            >
            <div className="card-titulo">
                <h1>{servico.title}</h1>
            </div>
            <div className="card-icon" data-aos="zoom-in" data-aos-delay={servico.delay + 200}>
                <i className={`bi ${servico.icon}`}></i>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
};

export default Servicos;