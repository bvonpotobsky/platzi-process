export class Users {
  constructor({
    name,
    age,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
  }) {
    this.name = name;
    this.age = age;
    this.emai = email;
    this.username = username;
    this.sociaMedia = {
      twitter,
      instagram,
      facebook,
    };
  };
};