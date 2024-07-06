// scripts.js
document.addEventListener('DOMContentLoaded', event => {
  // Отримати всі кнопки, які відкривають модальне вікно
  const openModalButtons = document.querySelectorAll('.services-btn');
  // Отримати всі кнопки, які закривають модальне вікно
  const closeButtons = document.querySelectorAll('.close');

  // Додати подію "click" для відкриття модального вікна
  openModalButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault(); // Запобігає переходу за посиланням
      const modalId = event.target.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Заблокувати прокрутку сторінки
      setTimeout(() => {
        modal.style.display = 'block';
      }, 10); // Невелика затримка для запуску переходу
    });
  });

  // Додати подію "click" для закриття модального вікна
  closeButtons.forEach(button => {
    button.addEventListener('click', event => {
      const modalId = event.target.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Відновити прокрутку сторінки
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // Затримка відповідає тривалості переходу
    });
  });

  // Закрити модальне вікно, якщо користувач натискає поза ним
  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
      document.body.style.overflow = ''; // Відновити прокрутку сторінки
      setTimeout(() => {
        event.target.style.display = 'none';
      }, 300); // Затримка відповідає тривалості переходу
    }
  });

  // Закрити модальне вікно, якщо користувач натискає клавішу ESC
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Відновити прокрутку сторінки
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300); // Затримка відповідає тривалості переходу
      });
    }
  });
});
