// --- Filtro por categoria ---
function filtrarCategoria(categoria) {
  const secoes = document.querySelectorAll(".section-saude");

  secoes.forEach((secao) => {
    const titulo = secao.querySelector("h2").innerText;
    if (categoria === "todas" || titulo === categoria) {
      secao.style.display = "flex";
    } else {
      secao.style.display = "none";
    }
  });

  // Parar o carrossel se o usuário usar o filtro
  clearInterval(intervaloRotacao);
}

// --- Rotação automática ---
let indiceAtual = 0;
const secoesCarousel = document.querySelectorAll("#carousel-dicas .section-saude");

function mostrarSecao(index) {
  secoesCarousel.forEach((secao, i) => {
    secao.classList.toggle('ativa', i === index);
  });
}
