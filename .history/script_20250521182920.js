let indiceAtual = 0;
const secoes = document.querySelectorAll('#carousel-dicas .section-saude');

function mostrarSecao(index) {
  secoes.forEach((secao, i) => {
    secao.style.display = (i === index) ? 'flex' : 'none';
  });
}

function proximaSecao() {
  indiceAtual = (indiceAtual + 1) % secoes.length;
  mostrarSecao(indiceAtual);
}

// Iniciar com a primeira
mostrarSecao(indiceAtual);

// Troca a cada 5 segundos
setInterval(proximaSecao, 5000);