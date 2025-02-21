import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/recomendacoes.css";

function Recomendacoes() {
    const [recomendacoes, setRecomendacoes] = useState([]);
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [texto, setTexto] = useState("");

    useEffect(() => {
        const fetchRecomendacoes = async () => {
            try {
                const res = await axios.get("http://localhost:5000/recomendacoes");
                setRecomendacoes(res.data);
            } catch (error) {
                console.error("Erro ao buscar recomendações:", error);
            }
        };

        fetchRecomendacoes();
    }, []);

    const isValidImageUrl = (url) => {
        return /\.(jpg|jpeg|png|gif)$/i.test(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidImageUrl(foto)) {
            alert("Por favor, insira uma URL de imagem válida.");
            return;
        }

        const novaRecomendacao = { nome, foto, texto };

        try {
            const res = await axios.post("http://localhost:5000/recomendacoes", novaRecomendacao);
            setRecomendacoes((prev) => [...prev, res.data]);
            setNome("");
            setFoto("");
            setTexto("");
            alert("Recomendação enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar recomendação:", error);
            alert("Ocorreu um erro ao enviar a recomendação. Tente novamente.");
        }
    };

    return (
        <div className="recomendacoes-container">
            <h2>Recomendações</h2>
            <form onSubmit={handleSubmit} className="form-recomendacao">
                <input
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL da foto"
                    value={foto}
                    onChange={(e) => setFoto(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Escreva sua recomendação"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                loop
                className="lista-recomendacoes"
            >
                {recomendacoes.map((rec, index) => (
                    <SwiperSlide key={index} className="recomendacao">
                        <img src={rec.foto} alt={rec.nome} className="foto-recomendacao" />
                        <h3>{rec.nome}</h3>
                        <p>{rec.texto}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Recomendacoes;


