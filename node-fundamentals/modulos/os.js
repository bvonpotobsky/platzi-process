const os = require("os");

// console.log(os.arch());
// console.log(os.platform());
// console.table(os.cpus());
// console.log(os.constants);

const SIZE = 1024;
// get kilobytes
function kb(bytes) {
  return bytes / SIZE;
}
// get megabytes
function mb(bytes) {
  return kb(bytes) / SIZE;
}
// get gigabytes
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.freemem());
console.log(`Free memoryRAM in Kilobytes: ${kb(os.freemem())}`);
console.log(`Free memoryRAM in Megabytes: ${mb(os.freemem())}`);
console.log(`Free memoryRAM in Gigabytes: ${gb(os.freemem())}`);
console.log(`Total memoryRAM in GigaBytes: ${gb(os.totalmem())}`);

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
