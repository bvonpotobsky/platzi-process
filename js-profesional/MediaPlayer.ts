class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  private initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  // Play/Pause method
  playVideo() {
    this.media.play();
  }
  pauseVideo() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.playVideo();
    } else {
      this.pauseVideo();
    }
  }
  // Mute/Unmute method
  mute() {
    this.media.muted = true;
  }
  unmuted() {
    this.media.muted = false;
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
