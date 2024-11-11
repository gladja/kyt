
const video = document.getElementById('myVideo');
const toggleSoundButton = document.getElementById('toggleSound');
const togglePlayButton = document.getElementById('togglePlay');

// Обработчик для включения/выключения звука
toggleSoundButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    toggleSoundButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Значок включенного звука
  } else {
    video.muted = true;
    toggleSoundButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Значок выключенного звука
  }
});

// Обработчик для паузы/воспроизведения
togglePlayButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>'; // Значок паузы
  } else {
    video.pause();
    togglePlayButton.innerHTML = '<i class="fas fa-play"></i>'; // Значок воспроизведения
  }
});
