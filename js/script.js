document.addEventListener('DOMContentLoaded', function() {
    // Menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um item de navegação
        const navLinks = document.querySelectorAll('.nav-menu ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    } else {
        console.warn("Elementos .menu-toggle ou .nav-menu não encontrados.");
    }

    // Inicialização do Swiper (Carrossel de Experiências)
    const swiper = new Swiper('.experience-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, // CARROSSEL INFINITO ATIVADO AQUI

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3, // Em telas maiores, 3 cards por vez
                spaceBetween: 30
            }
        },
        grabCursor: true, // Adiciona um cursor de "mãozinha" para indicar que é arrastável
        simulateTouch: true, // Habilita o arrasto com o mouse em desktop
    });
});