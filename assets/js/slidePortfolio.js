document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
    
        // Ativa a aba selecionada
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    
        // Exibe o conteúdo correspondente
        document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(category)) {
            item.classList.add('active');
        }
        });
    });
    });
    
    //Modal 
function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    const loading = document.getElementById(`loading-${id}`);
    const carousel = document.getElementById(`carousel-${id}`);
    document.body.style.overflow = 'hidden'; // Bloqueia o scroll
    modal.classList.add('show');
    setTimeout(() => {
        loading.style.display = 'none'; // Remove a tela de carregamento
        carousel.style.display = 'block'; // Mostra o carrossel
    }, 2000); // Simula o carregamento
}

function openModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    const loading = document.getElementById(`loading-${id}`);
    const carousel = document.getElementById(`carousel-${id}`);
    document.body.style.overflow = 'hidden'; // Bloqueia o scroll
    modal.classList.add('show');

    setTimeout(() => {
        loading.style.display = 'none'; // Remove a tela de carregamento
        carousel.style.display = 'block'; // Mostra o carrossel
        iniciarCarrossel(id); // Inicia o carrossel automático
    }, 2000); // Simula o carregamento
}

function closeModal(id) {
    const modal = document.getElementById(`modal-${id}`);
    const loading = document.getElementById(`loading-${id}`);
    const carousel = document.getElementById(`carousel-${id}`);
    document.body.style.overflow = ''; // Desbloqueia o scroll
    modal.classList.remove('show');
    loading.style.display = 'flex'; // Reseta o estado de carregamento
    carousel.style.display = 'none'; // Esconde o carrossel novamente
    pararCarrossel(id); // Para o carrossel automático
}

// Controla os carrosséis
const carrosselTimers = {};

function iniciarCarrossel(id) {
    const carrossel = document.querySelector(`#carousel-${id} .carrossel`);
    const imagens = carrossel.querySelectorAll('img');
    let indice = 0;

    carrosselTimers[id] = setInterval(() => {
        indice = (indice + 1) % imagens.length;
        atualizarCarrossel(id, indice);
        atualizarMiniaturas(id, indice);
    }, 3000); // Tempo entre transições
}

function pararCarrossel(id) {
    clearInterval(carrosselTimers[id]);
}

function mudarImagem(id, indice) {
    atualizarCarrossel(id, indice);
    atualizarMiniaturas(id, indice);
}

function atualizarCarrossel(id, indice) {
    const carrossel = document.querySelector(`#carousel-${id} .carrossel`);
    const imagens = carrossel.querySelectorAll('img');
    carrossel.style.transform = `translateX(-${indice * (300 / imagens.length)}%)`;
}

function atualizarMiniaturas(id, indice) {
    const miniaturas = document.querySelectorAll(`#carousel-${id} .imagens-container img`);
    miniaturas.forEach((miniatura, index) => {
        miniatura.classList.toggle('selected', index === indice);
    });
}

function toggleDescription(id) {
    const description = document.getElementById(`description-${id}`);
    description.classList.toggle('open');
}