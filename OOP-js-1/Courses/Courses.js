export class Course {
  constructor({
    name,
    lessons = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.lessons = lessons;
    this.isFree = isFree;
    this.lang = lang;
  };

  addClass(lesson) {
    this.lessons.push(lesson);
  };

  get name() {
    return this._name;
  };

  set name(newName) {
    if (newName === "Curso Malito de Programación Básica") {
      console.error("Wey... no");
    } else {
      this._name = newName;
    }
  } 
}