const { getCourse, getCourses, getStudent, getStudents } = require("./queries");
const {
  createStudent,
  editStudent,
  deleteStudent,
  createCourse,
  editCourse,
  deleteCourse,
  addPeople,
} = require("./mutations");

const { Course } = require("./types");

module.exports = {
  Query: { getCourse, getCourses, getStudent, getStudents },
  Mutation: {
    createStudent,
    editStudent,
    deleteStudent,
    createCourse,
    editCourse,
    deleteCourse,
    addPeople,
  },
  Course,
};
