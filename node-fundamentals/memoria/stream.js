const { Transform } = require("stream");
const { createReadStream } = require("fs");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const readableStream = createReadStream(__dirname + "/input.txt");

readableStream.pipe(upperCaseTransform).pipe(process.stdout);
