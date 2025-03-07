import React, { useState, useEffect } from "react";
import md5 from "md5"; // Biblioteca para gerar hash MD5 (Gravatar)
import "./css/recomendacao.css";

const Alerta = ({ mensagem, tipo, onFechar }) => {
    return (
        <div className={`alerta ${tipo}`}>
            <span>{mensagem}</span>
            <button onClick={onFechar}>&times;</button>
        </div>
    );
};

const Recomendacao = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [texto, setTexto] = useState("");
    const [recomendacoes, setRecomendacoes] = useState([]);
    const [alerta, setAlerta] = useState(null); // Estado inicial do alerta como null
    const [isLoading, setIsLoading] = useState(false);

    // URL do backend (usando a variável de ambiente VITE_API_URL ou fallback direto)
    const BACKEND_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        // Buscar recomendações aprovadas do backend
        fetch(`${BACKEND_URL}/recomendacoes`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setRecomendacoes(data))
            .catch((error) => {
                console.error("Erro ao buscar recomendações:", error);
                // Não mostramos alerta aqui, pois não é uma interação do usuário
            });
    }, [BACKEND_URL]);

    const mostrarAlerta = (mensagem, tipo = "sucesso") => {
        setAlerta({ mensagem, tipo }); // Define o alerta
        setTimeout(() => {
            setAlerta(null); // Remove o alerta após 5 segundos
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome && email && texto && texto.length <= 200) {
            setIsLoading(true);
            const novaRecomendacao = { nome, email, texto };

            try {
                const response = await fetch(`${BACKEND_URL}/recomendacoes`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(novaRecomendacao),
                });

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }

                setModalAberto(false);
                setNome("");
                setEmail("");
                setTexto("");
                mostrarAlerta("Recomendação enviada para aprovação!", "sucesso");
            } catch (error) {
                console.error("Erro ao enviar recomendação:", error);
                mostrarAlerta("Ocorreu um erro ao enviar sua recomendação. Por favor, tente novamente.", "erro");
            } finally {
                setIsLoading(false);
            }
        } else {
            mostrarAlerta("Preencha todos os campos corretamente.", "erro");
        }
    };

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?s=100&d=identicon`;
    };

    return (
        <div className="recomendacao-container">
            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-content">
                        <div className="loading-spinner"></div>
                        <p>Enviando Recomendação...</p>
                    </div>
                </div>
            )}
            {alerta && ( // Renderiza o alerta apenas se houver um valor em "alerta"
                <Alerta
                    mensagem={alerta.mensagem}
                    tipo={alerta.tipo}
                    onFechar={() => setAlerta(null)} // Fecha o alerta ao clicar no botão
                />
            )}
            <div>
                <h2 className="rocomendacoes-titulo">Recomendações</h2>
            </div>
            <button className="recomendacao-botao-azul" onClick={() => setModalAberto(true)}>
                Criar Recomendação
            </button>

            {modalAberto && (
                <div className="recomendacao-modal-overlay">
                    <div className="recomendacao-modal">
                        <h2>Nova Recomendação</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Sua recomendação (máximo 200 caracteres)"
                                value={texto}
                                onChange={(e) => setTexto(e.target.value)}
                                maxLength={200}
                                required
                            />
                            <small className="contador-caracteres">{texto.length}/200 caracteres</small>
                            <div className="recomendacao-botoes-modal">
                                <button type="button" className="recomendacao-botao-vermelho" onClick={() => setModalAberto(false)}>
                                    Fechar
                                </button>
                                <button type="submit" className="recomendacao-botao-azul">
                                    Enviar para Aprovação
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="recomendacao-recomendacoes-container">
                <div className="recomendacao-recomendacoes-track">
                    {recomendacoes.length > 0 ? (
                        recomendacoes.map((rec, index) => (
                            <div key={index} className="recomendacao-card">
                                <img src={getGravatarUrl(rec.email)} alt="Avatar" className="recomendacao-avatar" />
                                <h3>{rec.nome}</h3>
                                <p>{rec.texto}</p>
                            </div>
                        ))
                    ) : (
                        <p>Nenhuma recomendação disponível no momento.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recomendacao;
