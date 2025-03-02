import React, { useState, useEffect } from "react";
import "./css/portfolio.css"; // Importe o CSS correspondente
import "./css/style.css";

import portfolio from './img/Gif portfolio.gif';

const Portfolio = () => {
const [activeTab, setActiveTab] = useState();
const [isModalOpen, setIsModalOpen] = useState(false);
const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);

// Função para travar ou liberar o scroll da página
const toggleBodyScroll = (isModalOpen) => {
    if (isModalOpen) {
    document.body.style.overflow = "hidden"; // Trava o scroll
    } else {
    document.body.style.overflow = "auto"; // Libera o scroll
    }
};

// Efeito para travar/liberar o scroll quando o modal ou a descrição abrir/fechar
useEffect(() => {
    toggleBodyScroll(isModalOpen || isDescriptionOpen);
}, [isModalOpen, isDescriptionOpen]);

// Função para alternar entre as abas
const handleTabClick = (category) => {
    setActiveTab(category);
};

// Função para abrir o modal com o item selecionado
const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
};

// Função para fechar o modal
const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
};

// Função para abrir a descrição do item
const openDescription = () => {
    setIsDescriptionOpen(true);
};

// Função para fechar a descrição do item
const closeDescription = () => {
    setIsDescriptionOpen(false);
};

// Lista de certificados (agora com múltiplas imagens e descrição)
const certificados = [
    {
    id: 1,
    title: "Curso oline de PHP",
    images: ["/img/Certificado (1).png"],
    description: `
        Nome do Certificado: Curso oline de PHP
        Emissor: Rocketseat
        Data de Emissão: 13/10/2024
        Descrição: 
        
        Conteúdos: Desenvolvimento de uma aplicação PHP com Laravel seguindo a arquitetura MVC. Exploração dos fundamentos do PHP e conceitos essenciais para a criação de Controllers, 
        Models e Views, estruturando a aplicação de forma organizada. Uso do SQLite como banco de dados, com migrations para gerenciamento da estrutura. Geração de dados fictícios com factories e seeders para popular o banco. 
        Implementação de validações e construção de interfaces dinâmicas e reativas utilizando Livewire.`,
    },
    {
    id: 2,
    title: "Minicurso de Soft Skills",
    images: ["/img/Certificado (2).png"],
    description: `
        Nome do Certificado: Minicurso de Soft Skills
        Emissor: Cubos
        Data de Emissão: 08/10/2024
        Descrição: 
        
        O Minicurso de Soft Skills, oferecido pela Cubos, aborda as principais competências interpessoais essenciais para o desenvolvimento profissional e pessoal. Durante o curso, 
        os participantes exploram habilidades como comunicação eficaz, trabalho em equipe, inteligência emocional, resolução de problemas e adaptação a diferentes cenários. Com uma abordagem prática e dinâmica, 
        o curso prepara os alunos para enfrentar desafios do mercado de trabalho, promovendo um ambiente colaborativo e produtivo.
    `,
    },
    {
    id: 3,
    title: "Minicurso Introdutório de Flutter",
    images: ["/img/Certificado (3).png"],
    description: `
        Nome do Certificado: Minicurso Introdutório de Flutter
        Emissor: Cubos
        Data de Emissão: 07/10/2024
        Descrição: 
        
        O Minicurso Introdutório de Flutter, oferecido pela Cubos, apresenta os conceitos fundamentais do framework Flutter para o desenvolvimento de aplicativos multiplataforma. 
        Durante o curso, os participantes aprendem sobre a estrutura do Flutter, a linguagem Dart, criação de interfaces responsivas e interativas, além do uso de widgets para construir aplicações modernas e eficientes. 
        Com uma abordagem prática, o curso capacita os alunos a darem os primeiros passos no desenvolvimento mobile.
    `,
    },
    {
    id: 4,
    title: "Minicurso Introdutório de Desenv. de Software",
    images: ["/img/Certificado (4).png"],
    description: `
        Nome do Certificado: Minicurso Introdutório de Desenv. de Software
        Emissor: Cubos
        Data de Emissão: 24/09/2024
        Descrição: 
        
        O Minicurso Introdutório de Desenvolvimento de Software, oferecido pela Cubos, 
        apresenta os conceitos essenciais para quem deseja iniciar na programação. Durante o curso, os participantes aprendem sobre lógica de programação, 
        estrutura de dados, linguagens de programação, controle de versão e boas práticas no desenvolvimento de software. Com uma abordagem prática e acessível, 
        o curso proporciona uma base sólida para a construção de projetos e o aprofundamento na área de tecnologia.
    `,
    },
    {
    id: 5,
    title: "Imersão Dev com Google Gemini",
    images: ["/img/Certificado (5).png"],
    description: `
        Nome do Certificado: Imersão Dev com Google Gemini
        Emissor: Alura
        Data de Emissão: 16/09/2024
        Descrição: 
        
        A Imersão Dev com Google Gemini, promovida pela Alura, 
        oferece uma experiência intensiva para desenvolvedores explorarem o potencial da IA generativa. 
        Durante a imersão, os participantes aprendem a integrar o Google Gemini em aplicações, automatizar processos e criar soluções inteligentes com técnicas avançadas de desenvolvimento. 
        Com uma abordagem prática e desafiadora, essa experiência proporciona uma visão aprofundada sobre o uso da inteligência artificial no desenvolvimento de software.
    `,
    },
    {
    id: 6,
    title: "Integração - Sistema de Votação em Reality Show",
    images: ["/img/Certificado (6).png"],
    description: `
        Nome do Certificado: Integração - Sistema de Votação em Reality Show
        Emissor: Cubos
        Data de Emissão: 25/09/2024
        Descrição: 
        
        A Integração - Sistema de Votação em Reality Show, promovida pela Cubos, 
        oferece uma experiência prática na implementação de sistemas interativos de alta performance. Durante a integração, 
        os participantes aprendem a desenvolver e integrar um sistema de votação escalável, explorando conceitos como processamento em tempo real, segurança de dados, 
        arquitetura backend e otimização de desempenho. Essa experiência proporciona uma visão técnica aprofundada sobre o desenvolvimento de soluções para grandes volumes de usuários.
    `,
    },
    {
    id: 7,
    title: "Entrevista: como se destacar no Psel",
    images: ["/img/Certificado (7).png"],
    description: `
        Nome do Certificado: Entrevista: como se destacar no Psel
        Emissor: Cubos
        Data de Emissão: 24/09/2024
        Descrição: 
        
        A Entrevista: Como se Destacar no Processo Seletivo, 
        promovida pela Cubos, aborda estratégias e boas práticas para candidatos se destacarem em recrutamentos. 
        Durante a entrevista, são explorados temas como construção de um bom currículo, preparação para entrevistas técnicas e comportamentais, 
        postura profissional e habilidades valorizadas pelo mercado. Com dicas práticas e orientações valiosas, essa experiência auxilia os participantes a aumentarem suas chances de sucesso nos processos seletivos.
    `,
    },
    {
    id: 8,
    title: "Lógica de Programação: Mergulhe em Programação com Javascript",
    images: ["/img/Certificado (8).png"],
    description: `
        Nome do Certificado: Lógica de Programação: Mergulhe em Programação com Javascript
        Emissor: Alura
        Data de Emissão: 07/10/2024
        Descrição: 
        
        O curso Lógica de Programação: Mergulhe em Programação com JavaScript, oferecido pela Alura, 
        proporciona uma introdução sólida aos fundamentos da programação. Durante o curso, os participantes aprendem conceitos essenciais como variáveis, 
        estruturas de controle, loops e funções, utilizando JavaScript para resolver desafios práticos e desenvolver o pensamento lógico. Com uma abordagem interativa e dinâmica, 
        o curso é ideal para quem deseja dar os primeiros passos na programação e construir uma base sólida para avançar na área.
    `,
    },
    {
    id: 9,
    title: "Introdução ao Marketing Digital",
    images: ["/img/Certificado (9).png"],
    description: `
        Nome do Certificado: Introdução ao Marketing Digital
        Emissor: EBAC
        Data de Emissão: 04/08/2024
        Descrição: 
        
        O curso Introdução ao Marketing Digital, oferecido pela EBAC, 
        apresenta os conceitos fundamentais do marketing no ambiente digital. Durante o curso, 
        os participantes exploram temas como estratégias de marketing online, presença digital, redes sociais, 
        SEO, tráfego pago e produção de conteúdo, aprendendo como aplicar essas técnicas para potencializar resultados. Com uma abordagem prática e acessível, 
        o curso é ideal para quem deseja iniciar na área e entender como o marketing digital pode impulsionar negócios e marcas.
    `,
    },
    {
    id: 10,
    title: "Inteligência Artificial: Carreira do Futuro",
    images: ["/img/Certificado (10).png"],
    description: `
        Nome do Certificado: Inteligência Artificial: Carreira do Futuro
        Emissor: exame
        Data de Emissão: 10/06/2024
        Descrição: 
        
        O curso Inteligência Artificial: Carreira do Futuro, 
        oferecido pela Exame, apresenta um panorama sobre o impacto da IA no mercado de trabalho e as oportunidades para profissionais da área. 
        Em uma abordagem dinâmica e acessível, o curso explora conceitos fundamentais da inteligência artificial, suas aplicações em diferentes setores e as 
        habilidades essenciais para se destacar nesse campo em constante evolução. Ideal para quem deseja entender as tendências da tecnologia e como a IA está transformando carreiras e negócios.
    `,
    },
    {
    id: 11,
    title: "Introdução à Programação",
    images: ["/img/Certificado (11).png"],
    description: `
        Nome do Certificado: Introdução à Programação
        Emissor: EBAC
        Data de Emissão: 24/05/2024
        Descrição: 
        
        O curso Introdução à Programação, oferecido pela EBAC, 
        oferece uma base sólida para quem deseja iniciar na área de desenvolvimento de software. 
        Durante o curso, os participantes aprendem os conceitos fundamentais da programação, como variáveis, 
        estruturas de controle, loops e funções, além de desenvolver habilidades práticas para resolver problemas com código. 
        A abordagem acessível e interativa torna esse curso ideal para iniciantes, proporcionando uma compreensão clara dos conceitos 
        essenciais para avançar no mundo da programação.
    `,
    },
    {
    id: 12,
    title: "Plano de Carreira",
    images: ["/img/Certificado (12).png"],
    description: `
        Nome do Certificado: Plano de Carreira
        Emissor: EBAC
        Data de Emissão: 11/01/2024
        Descrição: 
        
        O curso Plano de Carreira, oferecido pela EBAC, proporciona uma abordagem estratégica para o desenvolvimento profissional. 
        Durante o curso, os participantes aprendem a construir e alinhar um plano de carreira com seus objetivos pessoais e profissionais, 
        abordando temas como definição de metas, gestão de habilidades, desenvolvimento de competências e construção de uma trajetória sólida no mercado de trabalho. 
        Com uma metodologia prática e voltada para resultados, o curso é ideal para quem deseja planejar de forma eficaz o seu futuro profissional.
    `,
    },
    {
    id: 13,
    title: "Profissão: TI do Zero ao Pro",
    images: ["/img/Certificado (13).png"],
    description: `
        Nome do Certificado: Profissão: TI do Zero ao Pro
        Emissor: EBAC
        Data de Emissão: 08/01/2024
        Descrição: 
        
        O curso Profissão: TI do Zero ao Pro, oferecido pela EBAC, 
        apresenta uma jornada completa para quem deseja ingressar no mercado de Tecnologia da Informação. 
        Durante o curso, os participantes exploram os principais conceitos da área, incluindo fundamentos da programação, 
        redes, segurança da informação, banco de dados e metodologias ágeis. Com uma abordagem prática e estruturada, 
        o curso capacita os alunos a desenvolverem habilidades essenciais para construir uma carreira sólida e promissora na área de TI.
    `,
    },
    {
    id: 14,
    title: "Hardware",
    images: ["/img/Certificado (14).png"],
    description: `
        Nome do Certificado: Hardware
        Emissor: Microcamp
        Data de Emissão: 29/06/2011
        Descrição: 
        
        O curso de Hardware, oferecido pela Microcamp, proporcionou uma formação presencial completa sobre montagem, 
        manutenção e configuração de computadores. Durante o curso, foram abordados temas como arquitetura de hardware, 
        identificação e substituição de componentes, diagnóstico de falhas, instalação de sistemas operacionais e otimização de desempenho. 
        Com uma abordagem prática e mão na massa, o curso preparou os participantes para atuar na manutenção e suporte técnico de computadores e dispositivos.
    `,
    },
    {
    id: 15,
    title: "Inteligência Artificial: Eleve sua Produtividade e Acelere sua Carreira",
    images: ["/img/Certificado (15).png"],
    description: `
        Nome do Certificado: Inteligência Artificial: Eleve sua Produtividade e Acelere sua Carreira
        Emissor: Conquer
        Data de Emissão: 24/06/2024
        Descrição: 
        
        O curso Inteligência Artificial: Eleve sua Produtividade e Acelere sua Carreira, 
        oferecido pela Conquer, explora o uso estratégico da IA para otimizar tarefas, aumentar a 
        eficiência e impulsionar o crescimento profissional. Durante o curso, os participantes aprendem a 
        aplicar ferramentas de inteligência artificial em diversas áreas, automatizar processos e tomar 
        decisões mais rápidas e assertivas. Com uma abordagem prática e voltada para resultados, 
        o curso capacita os alunos a utilizar a IA como um diferencial competitivo no mercado de trabalho.
    `,
    },
    {
    id: 16,
    title: "Inteligência Artificial",
    images: ["/img/Certificado (16).png"],
    description: `
        Nome do Certificado: Inteligência Artificial
        Emissor: EBAC
        Data de Emissão: 25/06/2024
        Descrição: 
        
        O curso de Inteligência Artificial, oferecido pela EBAC, 
        apresenta os fundamentos e aplicações práticas da IA no mercado atual. 
        Durante o curso, os participantes exploram conceitos como aprendizado de máquina, 
        automação de tarefas, análise de dados e uso de ferramentas de IA para otimizar processos e impulsionar a inovação. 
        Com uma abordagem acessível e dinâmica, o curso capacita os alunos a compreenderem o impacto da inteligência artificial 
        e a utilizá-la de forma estratégica em suas carreiras e negócios.
    `,
    },
];

// Lista de projetos EBAC
const projetosEBAC = [
    {
    id: 1,
    title: "Projeto Bootstrap Beta",
    images: ["/img/EBAC (15).png", "/img/EBAC (2).png", "/img/EBAC (1).png"],
    description: `
        Nome do Projeto: Projeto Bootstrap Beta
        Data de Criação: 23 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Bootstrap
        Finalidade do Projeto: Criar um site com layout de página inicial usando o Bootstrap.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação da página com os elementos principais.
        * CSS: Customização dos estilos básicos para os componentes do Bootstrap.
        * JavaScript: Adicionar interatividade, como navegação por abas.
        * Bootstrap: Framework para criar um layout responsivo e interativo rapidamente.
    `,
    deployLink: "https://projeto-bootstrap-beta-swart.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/projeto-bootstrap"  // Link do GitHub
    },
    {
    id: 2,
    title: "Loja Virtual de Notebooks",
    images: ["/img/EBAC (3).png", "/img/EBAC (4).png", "/img/EBAC (5).png"],
    description: `
        Nome do Projeto: Loja Virtual de Notebooks
        Data de Criação: 12 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto: Criar uma loja online para vender notebooks.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do conteúdo da página e categorias de produtos.
        * CSS: Estilização da loja, incluindo layouts responsivos.
        * JavaScript: Funcionalidades interativas para exibição de produtos.
    `,
    deployLink: "https://loja-virtual-notebook-center.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/Loja-Virtual-NotebookCenter"  // Link do GitHub
    },
    {
    id: 3,
    title: "Calculador de Medias",
    images: ["/img/EBAC (10).png", "/img/EBAC (11).png", "/img/EBAC (21).png", "/img/EBAC (22).png"],
    description: `
        Nome do Projeto:Calculador de Medias
        Data de Criação: 19 de agosto de 2024, 13 de março de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto: Calcular media. 
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação da página e conteúdo semântico.
        * CSS: Estilização visual, incluindo layout responsivo.
        * JavaScript: Interatividade e manipulação dinâmica do conteúdo.
    `,
    deployLink: "https://ewerton-projeto-calculadora-medias-gamma.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/projeto_calculadora_medias"  // Link do GitHub
    },
    {
    id: 4,
    title: "Exercício Projeto 3",
    images: ["/img/EBAC (12).png", "/img/EBAC (13).png", "/img/EBAC (14).png"],
    description: `
        Nome do Projeto: Exercício Projeto 3
        Data de Criação: 25 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Bootstrap, Bootstrap Icons
        Finalidade do Projeto: Criar um exercício interativo para reforçar conceitos de programação.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do conteúdo e layout do exercício.
        * CSS: Estilização para melhorar a experiência visual e responsividade.
        * JavaScript: Implementação da lógica do exercício e validação de respostas.
        * Bootstrap: Utilizado para facilitar o layout responsivo e estruturação dos elementos visuais.
        * Bootstrap Icons: Ícones estilizados para melhorar a navegação e usabilidade do site.
    `,
    deployLink: "https://exercicio-projeto3-self.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/exercicio-Projeto3"  // Link do GitHub
    },
    {
    id: 5,
    title: " Projeto de Contato",
    images: [
        "/img/EBAC (16).png",
        "/img/EBAC (17).png",
    ],
    description: `
        Nome do Projeto: Projeto de Contato
        Data de Criação: 15 de março de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto:  Criar um formulário de contato simples com validação.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do formulário e dos campos de entrada.
        * CSS: Estilização do formulário e layout responsivo.
        * JavaScript: Validação de campos e feedback dinâmico para o usuário.
    `,
    deployLink: "https://projeto-contato-one.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/projeto_contato"  // Link do GitHub
    },
    {
    id: 6,
    title: " Galeria de Fotos com jQuery",
    images: [
        "/img/EBAC (18).png",
        "/img/EBAC (19).png",
        "/img/EBAC (20).png",
    ],
    description: `
        Nome do Projeto: Galeria de Fotos com jQuery
        Data de Criação: 3 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, jQuery
        Finalidade do Projeto:  Criar uma galeria de fotos com efeito de zoom ao passar o mouse.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação das imagens na galeria.
        * CSS: Estilização da galeria e efeitos visuais.
        * JavaScript: Controle interativo para exibir zoom nas imagens com jQuery.
        * jQuery: Biblioteca para manipulação de eventos e animações rápidas.
    `,
    deployLink: "https://ewe-jquery-galeria-fotos-phi.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/jquery-galeria-fotos"  // Link do GitHub
    },
    {
    id: 7,
    title: "Exercício Módulo 22",
    images: [
        "/img/EBAC (23).png",
        "/img/EBAC (24).png",
        "/img/EBAC (25).png",
    ],
    "description": `
        Nome do Projeto: Exercício Módulo 22
        Data de Criação: 22 de dezembro de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Sass, Parcel, AOS
        Finalidade do Projeto: Criar um exercício interativo de JavaScript.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do formulário e interações.
        * CSS: Estilização para melhorar a experiência do usuário.
        * JavaScript: Lógica do exercício e validação de respostas.
        * Sass: Utilizado para modularizar e facilitar a manutenção dos estilos.
        * Parcel: Empacotamento e otimização dos arquivos do projeto para melhor desempenho.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://exerc-cio-m-dulo-22-plum.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/Exerc-cio-m-dulo-22"  // Link do GitHub
    },
    {
    id: 8,
    title: "EBAC Tech Talks",
    images: [
        "/img/EBAC (26).png",
        "/img/EBAC (27).png",
        "/img/EBAC (28).png",
    ],
    "description": `
        Nome do Projeto: EBAC Tech Talks
        Data de Criação: 20 de dezembro de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Sass, Parcel, AOS
        Finalidade do Projeto: Criar uma plataforma de um evento de tech talks.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação das páginas de vídeos.
        * CSS: Estilização e layout responsivo para vídeos e descrições.
        * JavaScript: Função para carregar novos vídeos dinamicamente.
        * Sass: Utilizado para modularizar e facilitar a manutenção dos estilos.
        * Parcel: Empacotamento e otimização dos arquivos do projeto para melhor desempenho.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://ebac-tech-talks-black-eight.vercel.app//",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/ebac_tech_talks"  // Link do GitHub
    },
];

// Lista de projetos pessoais
const projetosPessoais = [
    {
    id: 1,
    title: "Blog de Valéria",
    images: [
        "/img/Projetos pessoal (1).png",
        "/img/Projetos pessoal (2).png",
        "/img/Projetos pessoal (3).png",
        "/img/Projetos pessoal (4).png",
    ],
    description: `
        Nome do Projeto: Blog de Valéria
        Data de Criação: 23 de abril de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, jQuery, AOS
        Finalidade do Projeto: Criar um blog simples com posts.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação das páginas do blog e dos posts.
        * CSS: Estilização da interface com um design limpo e fácil de navegar.
        * JavaScript: Funcionalidade para adicionar e mostrar comentários.
        * jQuery: Implementação de um visualizador de imagens dinâmico para os posts.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://valeria-blog.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/valeria_blog"  // Link do GitHub
    },
    {
    id: 2,
    title: "Histórias de Ficção Interativas",
    images: ["/img/EBAC (6).png", "/img/EBAC (7).png", "/img/EBAC (8).png"],
    description: `
        Nome do Projeto: Histórias de Ficção Interativas
        Data de Criação: 7 de setembro de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto: Criar uma plataforma para histórias de ficção com escolhas interativas.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação das páginas de história e escolhas.
        * CSS: Estilização do layout para uma experiência imersiva.
        * JavaScript: Lógica de navegação através das escolhas da história.
    `,
    deployLink: "https://hist-rias-de-fic-o-interativas.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/Hist-rias-de-Fic-o-Interativas"  // Link do GitHub
    },
    {
    id: 3,
    title: "Quiz Interativo",
    images: [
        "/img/Projetos pessoal (5).png",
        "/img/Projetos pessoal (6).png",
        "/img/Projetos pessoal (7).png",
        "/img/Projetos pessoal (8).png",
    ],
    description: `
        Nome do Projeto: Quiz Interativo
        Data de Criação: 3 de agosto de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto: Criar um quiz interativo com múltiplas escolhas.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do formulário de perguntas e opções.
        * CSS: Estilização das perguntas, respostas e transições entre telas.
        * JavaScript: Lógica para mostrar perguntas, verificar respostas e pontuação.
    `,
    deployLink: "https://quiz-interativo-chi.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/Quiz-Interativo"  // Link do GitHub
    },
    {
    id: 4,
    title: "Chatbot Intellecte",
    images: [
        "/img/Projetos pessoal (9).png",
        "/img/Projetos pessoal (10).png",
        "/img/Projetos pessoal (11).png",
        "/img/Projetos pessoal (12).png",
        "/img/Projetos pessoal (13).png",
    ],
    description: `
        Nome do Projeto: Chatbot Intellecte
        Data de Criação: 11 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript
        Finalidade do Projeto: Criar um chatbot simples para responder perguntas sobre mim.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação da interface de chat.
        * CSS: Estilização do layout de chat e das mensagens.
        * JavaScript: Lógica do chatbot e interatividade.
    `,
    deployLink: "https://intellecte-o-chatbot.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/-Intellecte-o-chatbot"  // Link do GitHub
    },
    {
    id: 5,
    title: "Meu Portfólio",
    images: [
        "/img/Projetos pessoal (14).png",
        "/img/Projetos pessoal (15).png",
        "/img/Projetos pessoal (16).png",
        "/img/Projetos pessoal (17).png",
        "/img/Projetos pessoal (18).png",
        "/img/Projetos pessoal (19).png",
        "/img/Projetos pessoal (20).png",
        "/img/Projetos pessoal (21).png",
        "/img/Projetos pessoal (22).png",
        "/img/Projetos pessoal (23).png",
    ],
    description: `
        Nome do Projeto: Meu Portfólio
        Data de Criação: 30 de julho de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Bootstrap Icons, AOS
        Finalidade do Projeto: Criar um portfólio pessoal para exibir meus projetos, meu primeiro portfólio.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do conteúdo da página e das seções.
        * CSS: Estilização visual para um design moderno e minimalista.
        * JavaScript: Interatividade para exibir detalhes dos projetos de forma dinâmica.
        * Bootstrap Icons: Ícones estilizados para melhorar a navegação e usabilidade.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://meu-portfolio-bice-xi.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/meu-portf-lio"  // Link do GitHub
    },
    {
    id: 6,
    title: "Valéria Colli Makeup",
    images: [
        "/img/Projetos pessoal (24).png",
        "/img/Projetos pessoal (25).png",
        "/img/Projetos pessoal (26).png",
        "/img/Projetos pessoal (27).png",
        "/img/Projetos pessoal (28).png",
        "/img/Projetos pessoal (29).png",
        "/img/Projetos pessoal (30).png",
        "/img/Projetos pessoal (31).png",
        "/img/Projetos pessoal (32).png",
    ],
    description: `
        Nome do Projeto: Valéria Colli Makeup
        Data de Criação: 23 de outubro de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Sass, Grunt, AOS
        Finalidade do Projeto: Criar um site para apresentar maquiagems da minha amada.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação do conteúdo do site, como informações dos produtos.
        * CSS: Estilização do layout para destacar os produtos.
        * JavaScript: Adicionar funcionalidades interativas, como filtro de produtos.
        * Sass: Pré-processador CSS para facilitar a organização e reutilização de estilos.
        * Grunt: Automatização de tarefas como compilação do Sass e otimização de arquivos.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://valeria-colli-makeup.vercel.app/#carrossel",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/Valeria-Colli-Makeup"  // Link do GitHub
    },
    {
    id: 7,
    title: "Deadpool - Filme",
    images: [
        "/img/Projetos pessoal (33).png",
        "/img/Projetos pessoal (34).png",
        "/img/Projetos pessoal (35).png",
        "/img/Projetos pessoal (36).png",
        "/img/Projetos pessoal (37).png",
        "/img/Projetos pessoal (38).png",
        "/img/Projetos pessoal (39).png",
        "/img/Projetos pessoal (40).png",
    ],
    description: `
        Nome do Projeto: Deadpool - Filme
        Data de Criação: 19 de dezembro de 2024
        Tecnologias Usadas: HTML, CSS, JavaScript, Sass, Gulp, AOS
        Finalidade do Projeto: Criar um site informativo sobre o filme Deadpool.
        Como Cada Tecnologia Foi Usada:
        * HTML: Estruturação da página com informações sobre o filme e personagens.
        * CSS: Estilização com elementos que remetem ao tema do filme.
        * JavaScript: Interatividade para mostrar trailers e informações adicionais.
        * Sass: Utilizado para organizar e modularizar os estilos do site.
        * Gulp: Automação de tarefas como compilação do Sass, minificação de arquivos e otimização de desempenho.
        * AOS: Biblioteca utilizada para animar elementos à medida que o usuário rola a página, criando efeitos visuais atrativos.
    `,
    deployLink: "https://deadpool-filme.vercel.app/",  // Link do deploy
    githubLink: "https://github.com/Ewerton-luiz-e-silva/deadpool-filme"  // Link do GitHub
    },
];

return (
    <section id="portfolio" className="portfolio">
    {/* Título e Descrição */}
    <div className="headline-portfolio">
        <h1 className="titulo">Portfolio
            <img className="gifs" src={portfolio} alt="portfolio" data-aos="zoom-in" data-aos-delay="300"/>
        </h1>
        <span className="descricao" id="p-descricao">
        Bem-vindo à seção onde compartilho minhas conquistas acadêmicas e profissionais. Aqui você encontrará meus certificados de cursos que aprimoram minhas habilidades em desenvolvimento e tecnologia, além de projetos que aplicam esses conhecimentos na prática. Cada certificado representa um novo passo na minha jornada de aprendizado contínuo. Já os projetos demonstram minha capacidade de transformar teoria em soluções funcionais e inovadoras. Explore e conheça mais sobre minha trajetória!
        </span>
        <br/>
        <br/>
        <p className="p-portfolio">Selecione uma opção abaixo para conhecer minhas qualificações, certificados e projetos.</p>
    </div>

    {/* Abas */}
    <div className="portfolio-tabs">
        <button
        className={`tab-btn ${activeTab === "certificados" ? "active" : ""}`}
        onClick={() => handleTabClick("certificados")}
        >
        Certificados
        <i class="bi bi-patch-check-fill"></i>
        </button>
        <button
        className={`tab-btn ${activeTab === "projetos-ebac" ? "active" : ""}`}
        onClick={() => handleTabClick("projetos-ebac")}
        >
        Projetos EBAC
        <i class="bi bi-file-slides-fill"></i>
        </button>
        <button
        className={`tab-btn ${activeTab === "projetos-pessoais" ? "active" : ""}`}
        onClick={() => handleTabClick("projetos-pessoais")}
        >
        Projetos Pessoais
        <i class="bi bi-file-easel-fill"></i>
        </button>
    </div>

    {/* Conteúdo do Portfólio */}
    <div className="portfolio-content">
        {/* Certificados */}
        {activeTab === "certificados" && (
        <div className="portfolio-item certificados active">
            <div className="gallery">
            {certificados.map((certificado) => (
                <div key={certificado.id} className="card">
                <img src={certificado.images[0]} alt={certificado.title} />
                <h3>{certificado.title}</h3>
                <button className="btn" onClick={() => openModal(certificado)}>
                    Saiba 
                    <i class="bi bi-plus-circle-fill"></i>
                </button>
                </div>
            ))}
            </div>
        </div>
        )}

        {/* Projetos EBAC */}
        {activeTab === "projetos-ebac" && (
        <div className="portfolio-item projetos-ebac">
            <div className="gallery">
            {projetosEBAC.map((projeto) => (
                <div key={projeto.id} className="card">
                <img src={projeto.images[0]} alt={projeto.title} />
                <h3>{projeto.title}</h3>
                    {/* Botões de Deploy e GitHub */}
                        {/* Botão Deploy */}
                        <button 
                            className="btn btn-outline-success" 
                            onClick={() => window.open(projeto.deployLink, "_blank")}
                        >
                            Deploy
                            <i class="bi bi-caret-up-fill"></i>
                        </button>

                        {/* Botão GitHub */}
                        <button 
                            className="btn btn-outline-dark" 
                            onClick={() => window.open(projeto.githubLink, "_blank")}
                        >
                            GitHub
                            <i class="bi bi-github"></i>
                        </button>

                    <button className="btn" onClick={() => openModal(projeto)}>
                        Saiba 
                        <i class="bi bi-plus-circle-fill"></i>
                    </button>
                </div>
            ))}
            </div>
        </div>
        )}

        {/* Projetos Pessoais */}
        {activeTab === "projetos-pessoais" && (
        <div className="portfolio-item projetos-pessoais">
            <div className="gallery">
            {projetosPessoais.map((projeto) => (
                <div key={projeto.id} className="card">
                <img src={projeto.images[0]} alt={projeto.title} />
                <h3>{projeto.title}</h3>
                    {/* Botões de Deploy e GitHub */}
                        {/* Botão Deploy */}
                        <button 
                            className="btn btn-outline-success" 
                            onClick={() => window.open(projeto.deployLink, "_blank")}
                        >
                            Deploy
                            <i class="bi bi-caret-up-fill"></i>
                        </button>

                        {/* Botão GitHub */}
                        <button 
                            className="btn btn-outline-dark" 
                            onClick={() => window.open(projeto.githubLink, "_blank")}
                        >
                            GitHub
                            <i class="bi bi-github"></i>
                        </button>

                    <button className="btn" onClick={() => openModal(projeto)}>
                        Saiba
                        <i class="bi bi-plus-circle-fill"></i>
                    </button>
                </div>
            ))}
            </div>
        </div>
        )}
    </div>

    {/* Modal */}
    {isModalOpen && selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.title}</h2>
            <div className="carousel">
            {selectedItem.images.map((image, index) => (
                <img key={index} src={image} alt={`Imagem ${index + 1}`} />
            ))}
            </div>
            <button className="btn" onClick={openDescription}>
            Ver Descrição
            </button>
            <button className="btn" onClick={closeModal}>
            Fechar
            </button>
        </div>
        </div>
    )}

    {/* Descrição do Item */}
    {isDescriptionOpen && selectedItem && (
        <div className="description-overlay" onClick={closeDescription}>
        <div className="description-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.title}</h2>
            <pre>{selectedItem.description}</pre>
            <button className="btn" onClick={closeDescription}>
            x
            </button>
        </div>
        </div>
    )}
    </section>
);
};

export default Portfolio;