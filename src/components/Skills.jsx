import React from "react";
import "./css/skills.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css"; 

import gifMinhasSkills from './img/Gif Minhas Skills.gif';


const Skills = () => {
  // Lista de habilidades com ícones, títulos e descrições
  const skillsList = [
    { icon: "bi-palette", title: "HTML5 & CSS3", description: "Crio interfaces web modernas, acessíveis e responsivas, utilizando as melhores práticas de HTML5 e CSS3." },
    { icon: "bi-code-slash", title: "JavaScript & ES6+", description: "Domino JavaScript e suas versões mais recentes (ES6+), aplicando conceitos avançados para criar experiências dinâmicas e interativas." },
    { icon: "bi-grid-3x3-gap", title: "Bootstrap", description: "Utilizo o Bootstrap para criar layouts responsivos rapidamente, garantindo consistência e velocidade no desenvolvimento front-end." },
    { icon: "bi-layers", title: "jQuery", description: "Facilito a manipulação de elementos DOM e eventos, criando interações dinâmicas de forma eficiente com jQuery." },
    { icon: "bi-chevron-bar-contract", title: "AOS (Animate on Scroll)", description: "Implemento animações suaves ao rolar a página, melhorando a experiência do usuário com AOS." },
    { icon: "bi-terminal", title: "Grunt", description: "Automatizo tarefas repetitivas no desenvolvimento front-end, como compilação de estilos e minificação de arquivos, com Grunt." },
    { icon: "bi-file-code", title: "Sass & Less", description: "Uso Sass e Less para escrever CSS mais estruturado e modular, facilitando a manutenção e escalabilidade dos estilos." },
    { icon: "bi-play", title: "Gulp", description: "Crio pipelines de build eficientes, automatizando tarefas como minificação e compilação com Gulp." },
    { icon: "bi-arrow-repeat", title: "ES6+", description: "Utilizo os recursos modernos do JavaScript ES6+, como arrow functions, promises e destructuring, para escrever código mais conciso e eficiente." },
    { icon: "bi-braces", title: "TypeScript", description: "Utilizo TypeScript para adicionar tipagem estática ao JavaScript, tornando o código mais robusto e fácil de manter." },
    { icon: "bi-diagram-3", title: "VueJS", description: "Crio interfaces de usuário reativas e componentes reutilizáveis com VueJS, facilitando o desenvolvimento de SPA's." },
    { icon: "bi-box-arrow-in-right", title: "React", description: "Desenvolvo aplicações web modernas e interativas utilizando React, focando na reutilização de componentes e otimização de performance." },
    { icon: "bi-check2-circle", title: "E2E com Cypress", description: "Realizo testes de ponta a ponta com Cypress, garantindo a qualidade e a funcionalidade da aplicação em diferentes fluxos de uso." },
    { icon: "bi-code-slash", title: "Java", description: "Desenvolvo soluções backend utilizando Java, aplicando boas práticas de programação orientada a objetos e garantindo alta performance." },
    { icon: "bi-git", title: "Git", description: "Utilizo Git para controle de versão, permitindo gerenciar e rastrear mudanças no código de forma eficiente, colaborando em equipe e mantendo a integridade do projeto." },
    { icon: "bi-github", title: "GitHub", description: "Utilizo GitHub para hospedagem de projetos, colaboração com outros desenvolvedores e gerenciamento de repositórios, facilitando o compartilhamento e a revisão de código." },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container-skills" data-aos="fade-up">
        {/* Título e Descrição */}
        <div className="headline-skills">
          <div className="text-headline-skills" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h2>
              Minhas Skills{" "}
              <img className="gifs" src={gifMinhasSkills} alt="Minhas Skills" />
            </h2>
            <p>
              Ao longo da minha carreira como desenvolvedor, adquiri habilidades em diversas tecnologias e ferramentas que me permitem criar soluções modernas, eficientes e escaláveis, tanto no front-end quanto no back-end.
            </p>
          </div>
        </div>

        {/* Conteúdo das Habilidades */}
        <div className="conteudo-skills">
          {skillsList.map((skill, index) => (
            <div className="box-skills" key={index} data-aos="fade-up" data-aos-delay={`${300 + index * 100}`}>
              <i className={`bi ${skill.icon}`}></i>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;