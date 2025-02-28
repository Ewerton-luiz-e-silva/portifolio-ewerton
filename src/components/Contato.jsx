import React, { useState, useEffect } from "react";
import md5 from "md5"; // Biblioteca para gerar hash MD5 (Gravatar)
import "./css/recomendacao.css";

const Recomendacao = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [texto, setTexto] = useState("");
    const [recomendacoes, setRecomendacoes] = useState([]);

    // URL do backend (usando a variável de ambiente VITE_API_URL ou fallback direto)
    const BACKEND_URL = import.meta.env.VITE_API_URL || "https://server-rho-drab-55.vercel.app";

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
            .catch((error) => console.error("Erro ao buscar recomendações:", error));
    }, [BACKEND_URL]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome && email && texto && texto.length <= 200) {
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
                alert("Recomendação enviada para aprovação!");
            } catch (error) {
                console.error("Erro ao enviar recomendação:", error);
                alert("Ocorreu um erro ao enviar sua recomendação. Por favor, tente novamente.");
            }
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    };

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?s=100&d=identicon`;
    };

    return (
        <div className="recomendacao-container">
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