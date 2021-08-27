import { Student } from "./Student.js";

export class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  };

  approveCourse(newCourse) {
      this.approvedCourses(newCourse);      
  }
}