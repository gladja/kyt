
const video = document.getElementById("myVideo");

window.addEventListener("scroll", () => {
  const videoPosition = video.getBoundingClientRect();
  if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {
    video.play();
  } else {
    video.pause();
  }
});