function filtrarCategoria(categoria) {
  const secoes = document.querySelectorAll('.section-saude');

  secoes.forEach(secao => {
    if (categoria === 'todas' || secao.dataset.categoria === categoria) {
      secao.style.display = 'flex';
    } else {
      secao.style.display = 'none';
    }
  });
}