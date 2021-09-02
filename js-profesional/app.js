import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./assets/plugins/AutoPlay.js";

// Catch the DOM
const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const muteButton = document.querySelector("#muteButton");

// Create an instance from the Prototype
const videoPlayer = new MediaPlayer({ el: video });

// Add event listener
playButton.onclick = () => videoPlayer.togglePlay();
muteButton.onclick = () => videoPlayer.toggleMute();
