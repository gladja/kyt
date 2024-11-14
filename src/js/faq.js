document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;
    const openItem = document.querySelector('.accordion__content.open');

    if (openItem && openItem !== accordionContent) {
      openItem.style.maxHeight = 0;
      openItem.classList.remove('open');
      openItem.previousElementSibling.classList.remove('active');
    }

    if (accordionContent.classList.contains('open')) {
      accordionContent.style.maxHeight = 0;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }

    accordionContent.classList.toggle('open');
    header.classList.toggle('active');
  });
});
