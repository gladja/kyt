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
      // document.body.style.overflow = 'hidden'; // Заблокувати прокрутку сторінки
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
    const { classList } = event.target;
    const parentElement = event.target.closest('a');

    if (classList) {
      if (classList.contains('modal__btn-support') || classList.contains('app__mob services-btn')) {
        const service = classList.contains('modal__btn-support')
          ? event.target.getAttribute('data-service')
          : 'pidtrumka';

        const form = document.getElementById('support-form');
        const telegram = document.getElementById('social-telegram');
        const instagram = document.getElementById('social-instagram');

        form.setAttribute('data-service', service);

        telegram.setAttribute('data-service', service);

        instagram.setAttribute('data-service', service);
      }
    }

    if (parentElement) {
      if (parentElement.getAttribute('data-event')) {
        dataLayer.push({
          event: parentElement.getAttribute('data-event'),
          service: parentElement.getAttribute('data-service'),
          type: parentElement.getAttribute('data-type'),
        });
      }
    }
  });

  document.addEventListener('submit', event => {
    const element = event.target;

    if (element) {
      if (element.getAttribute('data-event')) {
        dataLayer.push({
          event: element.getAttribute('data-event'),
          service: element.getAttribute('data-service'),
          type: element.getAttribute('data-type'),
        });
      }
    }
  });
});
