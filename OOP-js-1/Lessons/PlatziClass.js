function playVideo(id) {
  const url = `https://platziultrasecreto.com/${id}`;
  console.log(`Se está reproduciendo desde la url ${url}`);
}

function pauseVideo(id) {
  const url = `https://platziultrasecreto.com/${id}`;
  console.log(`Se está pausando tu video ${url}`);
}

export class PlatziClass {
  constructor({
    name,
    videoID,
    contributions = [],
    questions = [],
  }) {
    this.name = name;
    this.videoID = videoID;
    this.contributions = contributions;
    this.questions = questions;
  };

  play() {
    playVideo(this.videoID);
  }

  pause() {
    pauseVideo(this.videoID);
  }
}