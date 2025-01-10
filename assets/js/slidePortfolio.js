
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
