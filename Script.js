// Navegação suave com scrollIntoView
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    menuLinks.forEach(l => l.classList.remove('ativo'));
    link.classList.add('ativo');

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Produtos - troca de painel
const botoesProdutos = document.querySelectorAll('.produto-botao');
const img = document.querySelector('.produto-img');
const titulo = document.querySelector('.produto-titulo');
const preco = document.querySelector('.produto-preco');
const descricao = document.querySelector('.produto-descricao');

function atualizarVisualizacao(botao) {
  botoesProdutos.forEach(b => b.classList.remove('ativo'));
  botao.classList.add('ativo');

  img.src = botao.dataset.img;
  img.alt = botao.dataset.titulo;
  titulo.textContent = botao.dataset.titulo;
  preco.textContent = botao.dataset.preco;
  descricao.textContent = botao.dataset.descricao;
}

botoesProdutos.forEach(botao => {
  botao.addEventListener('click', () => atualizarVisualizacao(botao));
});

// Carregar primeiro produto por padrão
if (botoesProdutos.length > 0) {
  atualizarVisualizacao(botoesProdutos[0]);
}


