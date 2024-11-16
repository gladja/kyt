// const button = document.getElementById('toggleButton');

// // add class active button: "next location" to btn color to stay yellow
//   button.addEventListener('mousedown', () => {
//     button.classList.add('active'); 
//   });


const button = document.getElementById('toggleButton');

// Функция для добавления класса active
function activateButton() {
  button.classList.add('active');
}

// // // Функция для удаления класса active
// // function deactivateButton() {
// //   button.classList.remove('active');
// // }

// События для ПК и мобильных устройств
button.addEventListener('mousedown', activateButton); // ПК
button.addEventListener('touchstart', activateButton); // Мобильные

// // button.addEventListener('mouseup', deactivateButton); // ПК
// // button.addEventListener('touchend', deactivateButton); // Мобильные

// // Если палец или курсор уходит с кнопки
// // button.addEventListener('mouseleave', deactivateButton);
// // button.addEventListener('touchcancel', deactivateButton);
