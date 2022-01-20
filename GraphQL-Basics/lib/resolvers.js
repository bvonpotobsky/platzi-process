const { getCourses, getCourse, getStudent, getStudents } = require("./queries");
const { createCourse } = require("./mutations");

module.exports = {
  Query: { getCourse, getCourses, getStudent, getStudents },
  Mutation: { createCourse },
};
