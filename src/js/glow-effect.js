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


// effect button next location
const mapButton = document.querySelector('.map__btn');
let mapInterval;

function startGlowEffectMap() {
  mapButton.classList.add('glow-effect');
  mapInterval = setInterval(() => {
    mapButton.classList.toggle('glow-effect');
  }, 1500);
}

function stopGlowEffectMap() {
  clearInterval(mapInterval);
  mapButton.classList.remove('glow-effect');
}

mapButton.addEventListener('mouseenter', stopGlowEffectMap);
mapButton.addEventListener('mouseleave', startGlowEffectMap);

startGlowEffectMap();