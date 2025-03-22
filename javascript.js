// Função para abrir o menu lateral
function abrirMenu() {
    document.getElementById("menuLateral").classList.add("menu-aberto");
  }
  
  // Função para fechar o menu lateral
  function fecharMenu() {
    document.getElementById("menuLateral").classList.remove("menu-aberto");
  }
  
  // Fechar o menu ao clicar fora dele
  window.addEventListener("click", function (event) {
    const menuLateral = document.getElementById("menuLateral");
    const btnMenu = document.querySelector(".btn-menu");
  
    if (event.target !== btnMenu && !menuLateral.contains(event.target)) {
      fecharMenu();
    }
  });
  
  // Função para mostrar/ocultar o email de contato
  function mostrarEmail() {
    const contato = document.getElementById("contato");
    if (contato.style.display === "none" || contato.style.display === "") {
      contato.style.display = "block";
    } else {
      contato.style.display = "none";
    }
  }
  
  // Função para alternar entre tema claro e escuro
  function alternarTema() {
    const body = document.body;
    body.classList.toggle("tema-claro");
  
    // Salvar preferência do tema no localStorage
    if (body.classList.contains("tema-claro")) {
      localStorage.setItem("tema", "claro");
    } else {
      localStorage.setItem("tema", "escuro");
    }
  }
  
  // Carregar tema salvo ao iniciar a página
  function carregarTema() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "claro") {
      document.body.classList.add("tema-claro");
    }
  }
  
  // Botão "Voltar ao Topo"
  const backToTopButton = document.getElementById('back-to-top');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.style.opacity = '1';
      } else {
        backToTopButton.classList.add('hidden');
        backToTopButton.style.opacity = '0';
      }
    });
  
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
  
  // Scroll suave para links internos
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Inicializar
  document.addEventListener("DOMContentLoaded", () => {
    carregarTema(); // Carrega o tema salvo
  });
