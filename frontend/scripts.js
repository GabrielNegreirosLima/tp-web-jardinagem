let botaoEl = document.querySelector('#toggle-sidebar');
let bodyEl = document.querySelector('body');

function alternaMenu() {
  bodyEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);