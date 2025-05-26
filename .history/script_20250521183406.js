function filtrarCategoria(categoria) {
  const secoes = document.querySelectorAll('.section-saude');
  
  secoes.forEach(secao => {
    const titulo = secao.querySelector('h2').innerText;
    if (categoria === 'todas' || titulo === categoria) {
      secao.style.display = 'flex';
    } else {
      secao.style.display = 'none';
    }
  });
}