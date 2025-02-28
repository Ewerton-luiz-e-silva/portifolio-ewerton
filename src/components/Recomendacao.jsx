import React, { useState, useEffect } from "react";
import md5 from "md5"; // Biblioteca para gerar hash MD5 (Gravatar)
import "./css/recomendacao.css";

const Recomendacao = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [texto, setTexto] = useState("");
    const [recomendacoes, setRecomendacoes] = useState([]);

    useEffect(() => {
        // Buscar recomendações aprovadas do backend
        fetch("http://localhost:3000/recomendacoes")
            .then((res) => res.json())
            .then((data) => setRecomendacoes(data))
            .catch((error) => console.error("Erro ao buscar recomendações:", error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (nome && email && texto && texto.length <= 200) {
            const novaRecomendacao = { nome, email, texto };

            try {
                await fetch("http://localhost:5000/recomendacoes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(novaRecomendacao),
                });

                setModalAberto(false);
                setNome("");
                setEmail("");
                setTexto("");
                alert("Recomendação enviada para aprovação!");
            } catch (error) {
                console.error("Erro ao enviar recomendação:", error);
            }
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
                    {recomendacoes.map((rec, index) => (
                        <div key={index} className="recomendacao-card">
                            <img src={getGravatarUrl(rec.email)} alt="Avatar" className="recomendacao-avatar" />
                            <h3>{rec.nome}</h3>
                            <p>{rec.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recomendacao;

