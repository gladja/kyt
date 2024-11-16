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

// Обработчик для десктопа
button.addEventListener('mousedown', (e) => {
  button.classList.add('active');
});

// Обработчик для мобильных устройств
button.addEventListener('touchstart', (e) => {
  e.preventDefault(); // Предотвращаем дефолтное поведение
  button.classList.add('active');
  switchLocation(); // Вызываем функцию переключения локации
}, { passive: false });

// Убираем inline onclick из HTML и добавляем обработчик click для десктопа
button.addEventListener('click', (e) => {
  if (e.pointerType !== 'touch') { // Проверяем, что это не тач-событие
    switchLocation();
  }
});