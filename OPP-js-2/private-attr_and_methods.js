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
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private._learningPaths;
    },

    set(newLp) {
      if (newLp instanceof LearningPath) {
        private._learningPaths.push(newLp);
      } else {
        console.warn(
          "Algunos de los LPs no es una instancia del prototype LearningPath"
        );
      }
    },
  });

  // Validation statements
  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
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
  learningPaths: [escuelaDataScience, escuelaWeb],
});
