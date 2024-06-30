// const overlayForm = document.querySelector('[data-overlay]');
// const overlayHero = document.querySelector('.hero__wrap');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
// const openFormBtn = document.querySelector('.js-open-form');
// const closeFormBtn = document.querySelector('.js-close-form');

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is__open');
});

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is__open');
});
