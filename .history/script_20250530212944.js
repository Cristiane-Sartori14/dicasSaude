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

function proximaSecao() {
  indiceAtual = (indiceAtual + 1) % secoesCarousel.length;
  mostrarSecao(indiceAtual);
}

mostrarSecao(indiceAtual); // Mostra a primeira ao carregar

const intervaloRotacao = setInterval(proximaSecao, 3000); // 3 segundos

