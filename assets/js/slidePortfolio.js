<<<<<<< HEAD

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
=======
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');
        const intervalTime = 5000;

        // Função para mostrar a imagem atual
        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? '1' : '0';
            });
        }

        // Navegação para o próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        // Navegação para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Slideshow automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, intervalTime);

        // Exibe o slide inicial
        showSlide(currentIndex);
    });
});
>>>>>>> 88d415a90f4d758771bd03a35e6e84902f13e868
