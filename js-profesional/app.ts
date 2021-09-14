import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./assets/plugins/AutoPlay";
import AutoPause from "./assets/plugins/AutoPause";
import AdsPlugin from "./assets/plugins/Ads";

const video = document.querySelector("video");
const videoPlayer = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

const playButton: HTMLElement = document.querySelector("#playButton");
const muteButton: HTMLElement = document.querySelector("#muteButton");

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("./sw.js").catch((error) => {
//     console.log(error.message);
//   });
// }
// Add event listener
playButton.onclick = () => videoPlayer.togglePlay();
muteButton.onclick = () => videoPlayer.toggleMute();
