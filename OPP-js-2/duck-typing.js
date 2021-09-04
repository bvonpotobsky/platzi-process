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

// New LP
function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    get name() {
      return private._name;
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

    get courses() {
      return private._courses;
    },
  };

  return public;
}
// New Student
function createStudent({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
    _larningPaths: learningPaths,
  };

  const public = {
    age,
    email,
    approvedCourses,
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

    get learningPaths() {
      return private._larningPaths;
    },

    set learningPaths(newLP) {
      // Validation statements
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }

      if (!newLP.courses) {
        console.warn("Tu LP no tiene cursos");
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista *(de cursos)");
        return;
      }

      private._larningPaths.push(newLP);
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
