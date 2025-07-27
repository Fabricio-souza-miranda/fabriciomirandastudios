document.addEventListener('DOMContentLoaded', function() {
    // Objeto de traduções para os dois idiomas
    const translations = {
        'pt-BR': {
            heroTitle: "Olá, eu sou o <span class=\"highlight\">Fabrício.</span>",
            heroSubtitle: "Editor de vídeos e Motion designer",
            aboutTitle: "Sobre mim",
            aboutText: "Me chamo <strong>Fabrício Miranda</strong>. Com 3 anos de experiência como <strong>Designer Gráfico</strong> e <strong>Editor de vídeos</strong>, minha paixão pelo <strong>audiovisual</strong> nasceu na infância. Hoje, domino diversas ferramentas e já desenvolvi uma vasta gama de projetos.",
            skillsTitle: "Habilidades",
            skillsList: ["Edição de Vídeo", "Motion Graphics", "Design Gráfico", "Color Grading", "Animação 2D", "Storytelling Visual"],
            softwaresTitle: "Softwares",
            experienceTitle: "Experiências",
            contactTitle: "Contato",
            contactText: "Pronto para transformar suas ideias em vídeos impactantes e designs memoráveis? Seja para um projeto específico, uma parceria de longo prazo ou apenas para tirar dúvidas, estou aqui para ajudar. Vamos criar algo incrível juntos!",
            formNameLabel: "Seu Nome:",
            formEmailLabel: "Seu E-mail:",
            formMessageLabel: "Sua Mensagem:",
            formNamePlaceholder: "Digite seu nome",
            formEmailPlaceholder: "Digite seu e-mail",
            formMessagePlaceholder: "Descreva seu projeto ou dúvida...",
            sendEmailButton: "Enviar E-mail",
            orSeparator: "OU",
            whatsappButton: "WhatsApp",
            instagramButton: "Instagram",
            behanceButton: "Behance",
            footerText: "&copy; 2025 Fabrício Miranda. Todos os direitos reservados.",
            // Navbar
            navAbout: "Sobre mim",
            navExperience: "Experiências",
            navContact: "Contato",
            // Experience cards (need to map these)
            card1Title: "Portfolio Edição/Motion", // Título modificado
            card1Description: "Uma coleção de meus melhores trabalhos em edição de vídeo e motion design, demonstrando minha paixão e habilidade no audiovisual.", // Descrição modificada
            card1Button: "Ver Projeto",
            card2Title: "Mercado Livre",
            card2Description: "Após concluir um curso de Motion Design, decidi me desafiar em um projeto pessoal. O resultado? Uma imersão de 10 horas de trabalho ininterrupto e gratificante neste projeto.",
            card2Button: "Ver Projeto",
            card3Title: "Vídeos curtos & Design",
            card3Description: "Muitos dos meus clientes atuais aproveitam o poder dos vídeos curtos, e, com meu suporte, investem com sucesso para impulsionar sua presença nas redes sociais.",
            card3Button: "Ver Projeto",
            card4Title: "Cloves Barbeiro",
            card4Description: "Com meu fiel companheiro, Gimbal, fui contratado por um barbeiro para criar um vídeo tutorial sobre como agendar um corte, além de uma filmagem dinâmica de um corte de cabelo.",
            card4Button: "Ver Reels",
            card5Title: "Yan Gabriel",
            card5Description: "O Personal Trainer Yan Gabriel precisava de um Reels autêntico para dinamizar seu Instagram e atrair novos clientes para seus serviços.",
            card5Button: "Ver Reels",
            card6Title: "Destaques de Evento",
            card6Description: "Para celebrar a conquista de seu 10º certificado profissional, o cliente buscava um vídeo que mostrasse os bastidores e a preparação para este marco importante em sua carreira.",
            card6Button: "Ver Reels",
        },
        'en-US': {
            heroTitle: "Hi, I'm <span class=\"highlight\">Fabrício.</span>",
            heroSubtitle: "Video Editor & Motion Designer",
            aboutTitle: "About Me",
            aboutText: "My name is <strong>Fabrício Miranda</strong>. With 3 years of experience as a <strong>Graphic Designer</strong> and <strong>Video Editor</strong>, my passion for <strong>audiovisuals</strong> began in childhood. Today, I master various tools and have successfully completed a wide range of projects.",
            skillsTitle: "Skills",
            skillsList: ["Video Editing", "Motion Graphics", "Graphic Design", "Color Grading", "2D Animation", "Visual Storytelling"],
            softwaresTitle: "Software",
            experienceTitle: "Experiences",
            contactTitle: "Contact",
            contactText: "Ready to transform your ideas into impactful videos and memorable designs? Whether for a specific project, a long-term partnership, or just to ask questions, I'm here to help. Let's create something amazing together!",
            formNameLabel: "Your Name:",
            formEmailLabel: "Your Email:",
            formMessageLabel: "Your Message:",
            formNamePlaceholder: "Enter your name",
            formEmailPlaceholder: "Enter your email",
            formMessagePlaceholder: "Describe your project or question...",
            sendEmailButton: "Send Email",
            orSeparator: "OR",
            whatsappButton: "WhatsApp",
            instagramButton: "Instagram",
            behanceButton: "Behance",
            footerText: "&copy; 2025 Fabrício Miranda. All rights reserved.",
            // Navbar
            navAbout: "About me",
            navExperience: "Experiences",
            navContact: "Contact",
            // Experience cards (need to map these)
            card1Title: "Video/Motion Portfolio", // Título modificado
            card1Description: "A collection of my best works in video editing and motion design, showcasing my passion and skill in audiovisual.", // Descrição modificada
            card1Button: "View Project",
            card2Title: "Mercado Livre",
            card2Description: "After completing a Motion Design course, I decided to challenge myself with a personal project. The result? A 10-hour immersion of uninterrupted and gratifying work on this project.",
            card2Button: "View Project",
            card3Title: "Short Videos & Design",
            card3Description: "Many of my current clients leverage the power of short videos, and with my support, they successfully invest to boost their social media presence.",
            card3Button: "View Project",
            card4Title: "Cloves Barbeiro",
            card4Description: "Com meu fiel companheiro, Gimbal, fui contratado por um barbeiro para criar um vídeo tutorial sobre como agendar um corte, além de uma filmagem dinâmica de um corte de cabelo.",
            card4Button: "View Reels",
            card5Title: "Yan Gabriel",
            card5Description: "O Personal Trainer Yan Gabriel precisava de um Reels autêntico para dinamizar seu Instagram e atrair novos clientes para seus serviços.",
            card5Button: "Ver Reels",
            card6Title: "Event Highlights",
            card6Description: "Para celebrar a conquista de seu 10º certificado profissional, o cliente buscava um vídeo que mostrasse os bastidores e a preparação para este marco importante em sua carreira.",
            card6Button: "Ver Reels",
        }
    };

    // Função para detectar o idioma do navegador e definir o idioma inicial
    function getInitialLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        // Verifica se o idioma do navegador é português do Brasil
        if (userLang.startsWith('pt')) { // Mais abrangente para pt-BR, pt-PT, etc.
            return 'pt-BR';
        }
        return 'en-US'; // Padrão para inglês se não for português
    }

    let currentLanguage = getInitialLanguage(); // Idioma atual do site

    // Elementos do menu responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const languageToggleButton = document.getElementById('language-toggle-button');

    // Função para atualizar o texto do botão de idioma
    function updateLanguageButtonText() {
        if (currentLanguage === 'pt-BR') {
            // Usa imagem para a bandeira dos EUA (placeholder emoji-like)
            languageToggleButton.innerHTML = 'English <img src="https://placehold.co/20x15/0052B4/FFFFFF?text=US" alt="US Flag" class="flag-icon">';
        } else {
            // Usa imagem para a bandeira do Brasil (placeholder emoji-like)
            languageToggleButton.innerHTML = 'Português <img src="https://placehold.co/20x15/009B3A/FFDD00?text=BR" alt="Brazil Flag" class="flag-icon">';
        }
    }

    // Função para aplicar as traduções
    function applyTranslations() {
        const langData = translations[currentLanguage];

        // Atualizar elementos com data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (langData[key]) {
                // Para o heroTitle e aboutText, que contêm HTML, usar innerHTML
                if (key === 'heroTitle' || key === 'aboutText') {
                    element.innerHTML = langData[key];
                } else {
                    element.textContent = langData[key];
                }
            }
        });

        // Atualizar placeholders
        document.querySelectorAll('[data-lang-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-lang-key-placeholder');
            if (langData[key]) {
                element.placeholder = langData[key];
            }
        });

        // Atualizar a lista de habilidades
        const skillsListElement = document.querySelector('.skills-list');
        if (skillsListElement && langData.skillsList) {
            skillsListElement.innerHTML = langData.skillsList.map(skill => `<li>${skill}</li>`).join('');
        }

        // Atualizar títulos, descrições e botões dos cards de experiência
        document.querySelectorAll('.experience-card').forEach(card => {
            const cardId = card.getAttribute('data-card-id');
            const titleElement = card.querySelector('.card-title');
            const descriptionElement = card.querySelector('.card-description');
            const buttonSpanElement = card.querySelector('.behance-button span, .instagram-button span'); // Seleciona o span dentro do botão

            if (titleElement && langData[`card${cardId}Title`]) {
                titleElement.textContent = langData[`card${cardId}Title`];
            }
            if (descriptionElement && langData[`card${cardId}Description`]) {
                descriptionElement.textContent = langData[`card${cardId}Description`];
            }
            if (buttonSpanElement && langData[`card${cardId}Button`]) {
                buttonSpanElement.textContent = langData[`card${cardId}Button`];
            }
        });

        // Atualizar texto do footer
        const footerTextElement = document.querySelector('.footer p');
        if (footerTextElement && langData.footerText) {
            footerTextElement.innerHTML = langData.footerText;
        }

        // Atualizar o atributo lang do HTML
        document.documentElement.lang = currentLanguage;
    }

    // Inicialização do menu responsivo
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

    // Event listener para o botão de troca de idioma
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', function() {
            currentLanguage = (currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR');
            updateLanguageButtonText();
            applyTranslations();
        });
    } else {
        console.warn("Elemento #language-toggle-button não encontrado.");
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

    // --- Animação de Fade-in ao Scroll ---
    // Seleciona todos os elementos que terão a animação de fade-in
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    // Opções para o Intersection Observer
    const observerOptions = {
        root: null, // O viewport é o root
        rootMargin: '0px', // Nenhuma margem extra
        threshold: 0.2 // O callback será executado quando 20% do elemento estiver visível
    };

    // Callback para o Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento está visível, adiciona a classe para ativar a animação
                entry.target.classList.add('is-visible');
                // Para de observar o elemento uma vez que ele já foi animado
                observer.unobserve(entry.target);
            }
        });
    };

    // Cria uma nova instância do Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada elemento que deve ter a animação
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Aplica as traduções iniciais e atualiza o botão de idioma ao carregar a página
    updateLanguageButtonText();
    applyTranslations();
});
