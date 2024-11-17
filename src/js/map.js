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

button.addEventListener('mousedown', () => {
  button.classList.add('active');
});

button.addEventListener('touchstart', () => {
  button.classList.add('active');
}, { passive: true });