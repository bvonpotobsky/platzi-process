function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.playVideo(),
    pause: () => this.pauseVideo(),
    media: this.media,

    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

// Play/Pause method
MediaPlayer.prototype.playVideo = function () {
  this.media.play();
};

MediaPlayer.prototype.pauseVideo = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.playVideo();
  } else {
    this.pauseVideo();
  }
};

// Mute/Unmute method
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmuted = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted = !this.media.muted;
};

export default MediaPlayer;
