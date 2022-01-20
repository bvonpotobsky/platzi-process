const connectDb = require("./db");

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: "",
      topic: "",
    };

    const newCourse = Object.assign(defaults, input);
    let db;
    let course;

    try {
      db = await connectDb();
      course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.error(error);
    }

    return newCourse;
  },

  getCourses: async () => {
    let db,
      courses = [];

    try {
      db = await connectDb();
      courses = await db.collection("courses").find({}).toArray();
    } catch (error) {
      console.error(error);
    }
  },

  createStudent: async (root, { input }) => {
    let db;
    let student;
    try {
      db = await connectDb();
      student = await db.collection("students").insertOne(input);
      input._id = student.insertedId;
    } catch (error) {
      console.error(error);
    }
  },
};
