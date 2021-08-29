const ben = {
  name: 'Ben',
  age: 23,
  approvedCourses: [],

  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

Object.defineProperty(ben, "navigator", {
  value = "Chrome",
  writable = false,
  enumerable = true,
  configurable = true,
});

console.log(Object.getOwnPropertyDescriptors(ben));
console.log(ben);


// Agregar nueva propiedad con un metodo estatico del prototypo Object
// 3 argumentos
// Object.defineProperty(objeto, propiedad, {
  // value: "valor",
  // enumerable: true,
  // writeable: true,
  // configurable: true
// })