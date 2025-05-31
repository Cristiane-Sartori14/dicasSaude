document.addEventListener('DOMContentLoaded', function() {
  // Seu código de carrossel aqui

  let indiceAtual = 0;
  const secoesCarousel = document.querySelectorAll("#carousel-dicas .section-saude");

  function mostrarSecao(index) {
    secoesCarousel.forEach((secao, i) => {
      secao.style.display = i === index ? "flex" : "none";
    });
  }

  function proximaSecao() {
    indiceAtual = (indiceAtual + 1) % secoesCarousel.length;
    mostrarSecao(indiceAtual);
  }

  mostrarSecao(indiceAtual);
  const intervaloRotacao = setInterval(proximaSecao, 5000);

});
