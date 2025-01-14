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

    function closeModal(id) {
        const modal = document.getElementById(`modal-${id}`);
        const loading = document.getElementById(`loading-${id}`);
        const carousel = document.getElementById(`carousel-${id}`);
        document.body.style.overflow = ''; // Desbloqueia o scroll
        modal.classList.remove('show');
        loading.style.display = 'flex'; // Reseta o estado de carregamento
        carousel.style.display = 'none'; // Esconde o carrossel novamente
    }

    function toggleDescription(id) {
        const description = document.getElementById(`description-${id}`);
        description.classList.toggle('open');
    }
    
    let indice = 0;
    const imagens = document.querySelectorAll('.carrossel img');
    const miniaturas = document.querySelectorAll('.imagens-container img');
    const carrossel = document.querySelector('.carrossel');
    
    // Ajustar a largura do carrossel dinamicamente
    carrossel.style.width = `${auto * imagens.length}%`;
    
    function mudarImagem(ind) {
        indice = ind;
        atualizarCarrossel();
        atualizarMiniaturas();
        animarClique(ind);
    }
    
    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(-${indice * (1800 / imagens.length)}%)`;
    }
    
    function atualizarMiniaturas() {
        miniaturas.forEach((miniatura, index) => {
            miniatura.classList.remove('selected');
            if (index === indice) {
                miniatura.classList.add('selected');
            }
        });
    }
    
    function animarClique(ind) {
        miniaturas.forEach((miniatura, index) => {
            if (index === ind) {
                miniatura.classList.add('clicked');
                setTimeout(() => {
                    miniatura.classList.remove('clicked');
                }, 600);
            }
        });
    }
    