<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>

// Ejemplo: Animación para cards de productos
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add("animate__fadeInUp");
    });
});
