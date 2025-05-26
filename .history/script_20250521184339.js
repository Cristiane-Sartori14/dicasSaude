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
const secoesCarousel = document.querySelectorAll(
  "#carousel-dicas .section-saude"
);

function mostrarSecao(index) {
  secoesCarousel.forEach((secao, i) => {
    secao.style.display = i === index ? "flex" : "none";
  });
}

function proximaSecao() {
  indiceAtual = (indiceAtual + 1) % secoesCarousel.length;
  mostrarSecao(indiceAtual);
}

// Inicializa o carrossel automático
mostrarSecao(indiceAtual);
const intervaloRotacao = setInterval(proximaSecao, 5000);
