// const button = document.getElementById('toggleButton');

// // add class active button: "next location" to btn color to stay yellow
//   button.addEventListener('mousedown', () => {
//     button.classList.add('active'); 
//   });


// const button = document.getElementById('toggleButton');

// // Добавляем класс active при нажатии
// button.addEventListener('mousedown', () => {
//   button.classList.add('active');
// });

// // Для мобильных устройств
// // button.addEventListener('touchstart', () => {
// //   button.classList.add('active');
// // });



// button.addEventListener('touchstart', (e) => {
//     e.preventDefault(); // Предотвращаем дефолтное поведение
//     button.classList.add('active');
//   });


const button = document.getElementById('toggleButton');

let touchStartX = 0;
let touchStartY = 0;

// Обработчик для десктопа
button.addEventListener('mousedown', () => {
  button.classList.add('active');
  switchLocation();
});

// Когда начинаем касание кнопки
button.addEventListener('touchstart', (e) => {
  // Сохраняем координаты начального касания
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

// Когда заканчиваем касание
button.addEventListener('touchend', (e) => {
  // Получаем координаты окончания касания
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  // Проверяем, что касание началось и закончилось на кнопке
  // (с небольшим порогом для погрешности)
  const threshold = 10; // пикселей
  if (Math.abs(touchEndX - touchStartX) < threshold && 
      Math.abs(touchEndY - touchStartY) < threshold) {
    button.classList.add('active');
    switchLocation();
  }
});