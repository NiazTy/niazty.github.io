const musicURL = "../../public/music";

let musicList = [
  { title: "Blue Water", src: `${musicURL}/1.mp3` },
  { title: "Hurtful & Painful", src: `${musicURL}/2.mp3` },
  { title: "La Vaguelette", src: `${musicURL}/3.mp3` }
];

let currentMusicIndex = 0;
const audio = document.createElement("audio");
audio.volume = 0.5;

const init = () => {
  updateAudioSource(currentMusicIndex);
  updateSongTitle(currentMusicIndex);
  addEventListeners();
};

const updateAudioSource = (index) => {
  audio.src = musicList[index].src;
};

const updateSongTitle = (index) => {
  const songTitleElement = document.getElementById("song-title");
  songTitleElement.textContent = musicList[index].title;
};

const togglePlayPause = () => {
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  if (audio.paused) {
    audio.play();
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
  } else {
    audio.pause();
    playButton.classList.remove('hidden');
    pauseButton.classList.add('hidden');
  }
};

const previousSong = () => {
  currentMusicIndex = (currentMusicIndex > 0) ? currentMusicIndex - 1 : musicList.length - 1;
  updateAudioSource(currentMusicIndex);
  audio.pause();
  togglePlayPauseButton();
  updateSongTitle(currentMusicIndex);
};

const nextSong = () => {
  currentMusicIndex = (currentMusicIndex < musicList.length - 1) ? currentMusicIndex + 1 : 0;
  updateAudioSource(currentMusicIndex);
  audio.pause();
  togglePlayPauseButton();
  updateSongTitle(currentMusicIndex);
};

const togglePlayPauseButton = () => {
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  playButton.classList.remove('hidden');
  pauseButton.classList.add('hidden');
};

const updateProgressBar = () => {
  const currentTimeElement = document.getElementById("current-time");
  const durationElement = document.getElementById("duration");
  const progressBar = document.getElementById("progress-bar");

  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  currentTimeElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
};

const setDuration = () => {
  const durationElement = document.getElementById("duration");
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  durationElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const addEventListeners = () => {
  document.getElementById("play-and-stop-button").addEventListener("click", togglePlayPause);
  document.getElementById("backward-button").addEventListener("click", previousSong);
  document.getElementById("foward-button").addEventListener("click", nextSong);

  audio.addEventListener("timeupdate", updateProgressBar);
  audio.addEventListener("loadedmetadata", setDuration);
};

// Inisialisasi ketika dokumen sudah siap
document.addEventListener("DOMContentLoaded", init);
