// burger menu
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is__open');
});

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('is__open');
});

// scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
