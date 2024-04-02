document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os itens de navegação
    var navLinks = document.querySelectorAll('.nav-link');

    // Adiciona um evento de clique a cada item de navegação
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remove a classe 'active' de todos os itens de navegação
            navLinks.forEach(link => link.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            this.classList.add('active');

            // Verifica se o item clicado é o link "Home"
            if (this.getAttribute('href') === '#home') {
                // Impede o comportamento padrão do link
                event.preventDefault();
                // Atualiza a URL para corresponder ao ID da seção de "Home"
                history.replaceState(null, null, '#home');
                // Scrola para a seção "Home"
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});