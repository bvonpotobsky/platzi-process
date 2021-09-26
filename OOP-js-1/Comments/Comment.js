export class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  };

  post() {
    console.log(`${this.studentName} ( ${this.studentRole} )`);
    console.log(`${this.likes} likes`);
    console.log(`${this.content}`);
  }
}