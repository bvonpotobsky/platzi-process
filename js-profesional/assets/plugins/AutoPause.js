class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.hanlderIntersection = this.hanlderIntersection.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.hanlderIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
  }

  hanlderIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.playVideo();
    } else {
      this.player.pauseVideo();
    }
  }
}

export default AutoPause;
