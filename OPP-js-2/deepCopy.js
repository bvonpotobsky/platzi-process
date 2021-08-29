// 1) Check if its object or array
function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

// 2) Copy that element
function deepCopy(subject) {
  // Declare the 'copySubject' variable
  let copySubject;

  const subjectIsArray = isArray(subject);

  const subjectIsObject = isObject(subject);
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// Element to copy

const studentBase = {
  name: undefined,
  age: undefined,
  sport: undefined,

  sayHi() {
    return `Hola ${this.name}`;
  },
};

const benjamin = deepCopy(studentBase);
Object.defineProperty(benjamin, "name", {
  value: "Benjamin",
  writable: false,
  configurable: false,
});
// console.log(benjamin);
// console.log(Object.getOwnPropertyDescriptors(benjamin));

// -----------------------------------------------------------------

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
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

    readName() {
      return private._name;
    },

    changeName(newName) {
      private._name = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });

  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

// Object created
const luciano = createStudent({
  name: "Luciano",
  age: 24,
  email: "lucianopaviotti@gmail.com",
  instagram: "lucianopaviotti",
});
