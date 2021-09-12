import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./assets/plugins/AutoPlay";
import AutoPause from "./assets/plugins/AutoPause";

// Catch the DOM
const video: HTMLElement = document.querySelector("video");
const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");

// Create an instance from the Prototype
const videoPlayer = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

// Add event listener
playButton.onclick = () => videoPlayer.togglePlay();
muteButton.onclick = () => videoPlayer.toggleMute();
