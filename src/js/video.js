
const video = document.getElementById('myVideo');
const toggleSoundButton = document.getElementById('toggleSound');
const togglePlayButton = document.getElementById('togglePlay');

toggleSoundButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    toggleSoundButton.innerHTML = '<i class="fas fa-volume-up"></i>'; 
  } else {
    video.muted = true;
    toggleSoundButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; 
  }
});

togglePlayButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    togglePlayButton.innerHTML = '<i class="fas fa-pause"></i>'; 
  } else {
    video.pause();
    togglePlayButton.innerHTML = '<i class="fas fa-play"></i>'; 
  }
});
