const buttons = document.querySelectorAll('.services-btn');
let currentIndex = 0;
let interval;

function startGlowEffect() {
  buttons[currentIndex].classList.add('glow-effect');
  interval = setInterval(() => {
    buttons[currentIndex].classList.remove('glow-effect');
    currentIndex = (currentIndex + 1) % buttons.length;
    buttons[currentIndex].classList.add('glow-effect');
  }, 1500); // duration
}

function stopGlowEffect() {
  clearInterval(interval);
  buttons.forEach((button) => button.classList.remove('glow-effect'));
}

buttons.forEach((button) => {
  button.addEventListener('mouseenter', stopGlowEffect); 
  button.addEventListener('mouseleave', startGlowEffect); 
});

startGlowEffect();