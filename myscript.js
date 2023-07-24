const audio = new Audio("path/to/pink_sunrise.mp3"); // Replace "path/to/pink_sunrise.mp3" with the actual path to the music file

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const volumeFill = document.getElementById("volumeFill");
const volumeBar = document.getElementById("volumeBar");

let isPlaying = false;

startBtn.addEventListener("click", () => {
    audio.play();
    isPlaying = true;
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    isPlaying = false;
});

volumeBar.addEventListener("click", (event) => {
    const clickPosition = event.pageX - volumeBar.offsetLeft;
    const barWidth = volumeBar.clientWidth;
    const volumeLevel = clickPosition / barWidth;
    audio.volume = volumeLevel;
    volumeFill.style.width = `${volumeLevel * 100}%`;
});
