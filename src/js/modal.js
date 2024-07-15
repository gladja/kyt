document.addEventListener('DOMContentLoaded', event => {
  // Отримати всі кнопки, які відкривають модальне вікно
  const openModalButtons = document.querySelectorAll('.services-btn');
  // Отримати всі кнопки, які закривають модальне вікно
  const closeButtons = document.querySelectorAll('.close');
  // Отримати всі кнопки, які можуть відкривати інше модальне вікно
  const contactManagerButtons = document.querySelectorAll('.modal__btn-support');

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
      const modalId = event.target.closest('.close').getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Відновити прокрутку сторінки
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300); // Затримка відповідає тривалості переходу
    });
  });

  // Додати подію "click" для закриття поточного модального вікна і відкриття іншого
  contactManagerButtons.forEach(button => {
    button.addEventListener('click', event => {
      const currentModal = event.target.closest('.modal');
      const newModalId = button.getAttribute('data-modal');
      const newModal = document.getElementById(newModalId);

      // Закрити поточне модальне вікно
      currentModal.classList.remove('show');
      setTimeout(() => {
        currentModal.style.display = 'none';
      }, 300); // Затримка відповідає тривалості переходу

      // Відкрити нове модальне вікно
      newModal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Заблокувати прокрутку сторінки
      setTimeout(() => {
        newModal.style.display = 'block';
      }, 10); // Невелика затримка для запуску переходу
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

  // Відправка event в dataLayer
  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal__btn-social') || event.target.classList.contains('modal__social')) {
      dataLayer.push({
        'event': 'form_send',
        'service': event.target.classList[1],
        'type': event.target.classList[2]
      });
    } else if (event.target.classList.contains('modal__btn-support') && event.target.classList[1]) {
      const service = event.target.classList[1];
      const type = event.target.classList[2];
      const element = document.getElementById('support-form');
      element.classList.remove('form_send', 'pidtrumka', 'form');
      element.classList.add('form_send', service, type);
    }
  });

  document.addEventListener('submit', event => {
    if (event.target.classList.contains('form_send')) {
      dataLayer.push({
        'event': event.target.classList[0],
        'service': event.target.classList[1],
        'type': event.target.classList[2]
      });
    }
  });
});
