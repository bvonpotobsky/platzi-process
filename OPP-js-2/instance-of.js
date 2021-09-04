// Validation functions
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get name() {
  //     return private._name;
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.twitter = twitter;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };
  this.approvedCourses = approvedCourses;

  // Validation statements
  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }

  // const private = {
  //   _name: name,
  // };
  // const public = {
  //   age,
  //   email,
  //   approvedCourses,
  //   learningPath,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     if (newName.length !== 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos un caracter");
  //     }
  //   },
  // };
  // return public;
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [],
});

const escuelaDataScience = new LearningPath({
  name: "Escuela de Data Science",
  courses: [],
});

const juan = new Student({
  name: "Juan",
  age: 24,
  email: "jfissore@gmail.com",
  instagram: "jfissore",
  learningPaths: [
    escuelaDataScience,
    escuelaWeb,
    {
      name: "Escuela impostora",
      courses: [],
    },
  ],
});
