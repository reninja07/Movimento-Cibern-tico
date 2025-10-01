// Seleciona todos os membros
const membros = ['juan', 'brendha', 'renato', 'lucas'];

membros.forEach(nome => {
    const img = document.getElementById(nome);

    img.addEventListener("mouseover", () => {
        img.src = `imagens/${nome}-marcadagua.jpg`; // ao passar o mouse
    });

    img.addEventListener("mouseout", () => {
        img.src = `imagens/${nome}.jpeg`; // ao tirar o mouse
    });
});
// Seleciona todos os elementos do site
const elementos = document.querySelectorAll('*');

// Adiciona classe inicial de animação (ocultos no começo)
elementos.forEach(el => el.classList.add('animar'));

// Configuração do IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
      // Se quiser animar só 1 vez, descomente:
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1});

// Observa todos os elementos
elementos.forEach(el => observer.observe(el));

