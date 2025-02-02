
const backToTopButton = document.getElementById('back-to-top');

function abrirCurriculo() {
   
    const contato = document.getElementById('contato');
    if (contato) {
      contato.style.display = 'block'; 
    }
  }


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


