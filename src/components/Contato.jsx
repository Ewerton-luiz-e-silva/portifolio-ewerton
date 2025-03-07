import React, { useState } from "react";
import "./css/contato.css"; // Importe o CSS correspondente
import "./css/style.css";
import "./css/clash-grotesk.css";
import gifContatos from './img/Gif 01.gif';
import imagemEmail from './img/email.png';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const API_URL = import.meta.env.VITE_API_URL;
        const dadosFormulario = { nome, telefone, email, mensagem };

        try {
            const response = await fetch(`${API_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosFormulario),
            });

            const result = await response.json();
            if (result.success) {
                setAlert({ type: 'success', message: 'Formulário enviado com sucesso!' });
                setNome('');
                setTelefone('');
                setEmail('');
                setMensagem('');
            } else {
                setAlert({ type: 'error', message: 'Erro ao enviar o formulário. Tente novamente.' });
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setAlert({ type: 'error', message: 'Erro ao enviar o formulário. Tente novamente.' });
        } finally {
            setIsLoading(false);
        }
    };

    const closeAlert = () => {
        setAlert(null);
    };

    return (
        <section id="contato" className="contato">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-content">
                        <div className="loading-spinner"></div>
                        <p>Enviando Formulário...</p>
                    </div>
                </div>
            )}
            <div className="container-contato" data-aos="fade-up" data-aos-duration="1000">
                <div className="headline-contato" data-aos="fade-up" data-aos-delay="200">
                    <div className="titulo-contato">
                        <h1>
                            Contato{" "}
                            <img className="gifs" src={gifContatos} alt="Contato" />
                        </h1>
                    </div>
                    <div className="descricao-contato">
                        <ul className="lista-contato">
                            <li>
                                <a href="https://wa.me/5519999934920" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ewerton.luiz_1994@hotmail.com?subject=E-mail" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-envelope"></i> E-mail
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.bing.com/search?q=amparo+sp+rua+afonso+geremias+186&form=ANNTH1&refig=57924c36853647488fc5aad77ddf44f7&pc=ACTS&ucpdpc=UCPD&adppc=EdgeStart"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-geo-alt"></i> Endereço
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="conteudo-contato" data-aos="fade-up" data-aos-delay="400">
                    <div className="formulario-contato">
                        <h2>Entre em contato</h2>
                        <p>
                            Fique à vontade para entrar em contato! Utilize o formulário abaixo para enviar uma mensagem e eu retornarei o mais breve possível.
                            Estou sempre aberto a novas oportunidades e parcerias. Estou muito ansioso para fazer sua ideia virar realidade – aceito o desafio!
                        </p>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Digite seu nome completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <input
                                type="tel"
                                placeholder="(55) 22222-2222"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Seu melhor email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                name="mensagem"
                                id="mensagem"
                                placeholder="Escreva o que você deseja aqui..."
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                            ></textarea>
                            <button className="btn" type="submit" disabled={isLoading}>
                                {isLoading ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                    <div className="logo-contato" data-aos="fade-up" data-aos-delay="600">
                        <img src={imagemEmail} alt="Logo de Contato" />
                    </div>
                </div>
            </div>
            {alert && (
                <div className={`alert ${alert.type}`}>
                    <span className="icon">
                        {alert.type === 'success' && '✔️'}
                        {alert.type === 'error' && '❌'}
                    </span>
                    <span>{alert.message}</span>
                    <button className="close-btn" onClick={closeAlert}>&times;</button>
                </div>
            )}
        </section>
    );
};

export default Contato;