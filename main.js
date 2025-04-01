// Controle do Menu Lateral
function abrirMenu() {
    document.querySelector('.menu-lateral').classList.add('menu-aberto');
    document.body.style.overflow = 'hidden';
}

function fecharMenu() {
    document.querySelector('.menu-lateral').classList.remove('menu-aberto');
    document.body.style.overflow = '';
}

// Fechar menu ao clicar fora
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu-lateral');
    const btnMenu = document.querySelector('.btn-menu');
    const menuContent = document.querySelector('.menu-lateral-conteudo');
    
    // Se clicou fora do menu e não foi no botão do menu
    if (!menuContent.contains(event.target) && event.target !== btnMenu && !btnMenu.contains(event.target)) {
        fecharMenu();
    }
});

function alternarTema() {
    document.body.classList.toggle("tema-claro");
    const isDarkMode = document.body.classList.contains("tema-claro");
    localStorage.setItem("tema", isDarkMode ? "escuro" : "claro");
    
    // Atualizar ícone do tema
    const btnTema = document.querySelector(".btn-tema");
    btnTema.textContent = isDarkMode ? "☀️" : "🌙";
    
    // Forçar redesenho para garantir a transição
    document.querySelector('nav').style.display = 'none';
    document.querySelector('nav').offsetHeight; // Trigger reflow
    document.querySelector('nav').style.display = 'flex';
}

// Carregar tema salvo
function carregarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('tema-claro');
        document.querySelector('.btn-tema').textContent = '☀️';
    }
}

// Animação de Digitação
function typeWriter(element, text, i = 0) {
    if (element && i < text.length) {
        element.textContent += text.charAt(i);
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarTema();
    
    // Atualizar ano no footer
    const anoAtual = document.getElementById('ano-atual');
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }
    
    // Iniciar animação de digitação
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        typingElement.textContent = '';
        typeWriter(typingElement, 'Explorando o universo do front-end!');
    }
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});