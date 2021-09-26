// Object literal
const benjamin = {
  name: 'Benjamin',
  age: 23,
  approvedCourses: [
    "HTML y CSS Definitov",
    "JavaScript Basico",
    "JavaScript Practico",
    "FrontEnd Developer",
  ],

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
};

// Old syntax of Class prototype
function Student(name, age, approvedCourses) {
  this.name = name,
  this.age = age,
  this.approvedCourses = [];

  // One way to create method
  // this.approveCourse(course) {
  //   this.approvedCourses.push(course)
  // }
}

// Create method of prototype
Student.prototype.approveCourse = function(course) {
  this.approvedCourses.push(course);
} 

// ES6 syntax of Class
class Student2 {
  constructor({
    name,
    age,
    email,
    twitter,
    linkedIn,
    approvedCourses = [],
    }) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.twitter = twitter;
    this.linkedIn = linkedIn;
    this.approvedCourses = approvedCourses;
  }

  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

const lionel = new Student2({ email: "bvon@gmail.com", name: 'Lionel', age: 35, linkedIn: 'bvonpotobsky'});

