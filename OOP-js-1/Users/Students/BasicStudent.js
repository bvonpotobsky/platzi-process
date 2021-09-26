import { Student } from "./Student.js";

export class BasicStudent extends Student {
  constructor(props) {
    super(props);
  };


  approveCourse(newCourse) {
      if(newCourse.lang === "english") {
        console.warn("Lo siento, no puedes tomar cursos en ingles");
      } else {
        this.approvedCourses(newCourse);      
      } 
  }
}