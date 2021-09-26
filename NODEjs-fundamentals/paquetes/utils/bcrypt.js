const bcrypt = require("bcrypt");

const password = "1234segura";

console.log(
  bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err, res) => {
      console.log(err);
      console.log(res);
    });
  })
);
