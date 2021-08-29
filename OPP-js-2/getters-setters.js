function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    get name() {
      return private._name;
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPath = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    age,
    email,
    approvedCourses,
    learningPath,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },

    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName.length !== 0) {
        private._name = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter");
      }
    },
  };
  return public;
}

const juan = createStudent({
  name: "Juan",
  age: 23,
  email: "juanfissore@gmail.com",
  instagram: "juanfissore",
});
