import { Student } from "./Student.js";
import { Comment } from "../../Comments/Comment.js";

export class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  };

  approveCourse(newCourse) {
      this.approvedCourses(newCourse);      
  }

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor",
    });
      comment.post();
  }
}
