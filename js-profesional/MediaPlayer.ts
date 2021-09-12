class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
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
