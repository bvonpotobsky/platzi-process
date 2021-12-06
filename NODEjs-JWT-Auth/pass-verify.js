const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(myPassword, 10);

  const isMatch = await bcrypt.compare(myPassword, hashedPassword);
  if (isMatch) {
    console.log('Password is correct');
  } else {
    console.log('Password is incorrect');
  }
  console.log(isMatch);
}

verifyPassword();
