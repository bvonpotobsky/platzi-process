import { Student } from "./Student.js";

export class FreeStudent extends Student {
  constructor(props) {
    super(props);
  };

  approveCourse(newCourse) {
    if(newCourse.isFree) {
      this.approvedCourses.push(newCourse);      
    } else {
      console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`);
    }
  }
}
