// 1. Sélectionner les éléments
const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
// 2. Écouter le clic
bouton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});
  // 3. Toggle la classe
  menu.classList.toggle('is-open');

