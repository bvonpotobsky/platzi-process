import { Users } from "../Users.js";

export class Professor extends Users {
  constructor({
    name,
    surname,
    age,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    coursesCreated = [],
  }) {
    super({name, surname, age, email, username, twitter, instagram, facebook});
    this.coursesCreated = coursesCreated;
  };

  createCourse(course) {
    this.coursesCreated.push(course);
  }
}