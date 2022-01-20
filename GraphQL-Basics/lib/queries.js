const { ObjectId } = require("mongodb");

const connectDB = require("./db");

module.exports = {
  getCourses: async () => {
    let db,
      courses = [];
    try {
      db = await connectDB();
      courses = await db.collection("courses").find({}).toArray();
      return courses;
    } catch (err) {
      console.error(err);
    }
  },
  getCourse: async (root, { id }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db.collection("courses").findOne({ _id: ObjectId(id) });
      return course;
    } catch (err) {
      console.error(err);
    }
  },
  getStudents: async () => {
    let db,
      students = [];
    try {
      db = await connectDB();
      students = await db.collection("students").find({}).toArray();
      return students;
    } catch (err) {
      console.error(err);
    }
  },
  getStudent: async (root, { id }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db.collection("students").findOne({ _id: ObjectId(id) });
      return student;
    } catch (err) {
      console.error(err);
    }
  },
};
