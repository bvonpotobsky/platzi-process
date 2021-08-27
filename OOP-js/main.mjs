import { Professor } from './Users/Professor/Professor.js'
import { Course } from './Courses/Courses.js';
import { LearningPath } from './learningPaths/learningPaths.js';
import { PlatziClass } from './Lessons/PlatziClass.js';
import { FreeStudent } from './Users/Students/FreeStudent.js';
import { TeacherStudent } from './Users/Students/TeacherStudent.js';
import { BasicStudent } from './Users/Students/BasicStudent.js';


// Lessons
const platziClass_1 = new PlatziClass({
  name: 'JavaScript: orientado a objetos',
  videoID: 'qwerty123',
});

// Courses
const programacionBasica = new Course({
  name: "Curso de Programación Básica",
  lang: 'english',
  isFree: true,
});


const javascriptBasico = new Course({
  name: "JavaScript Básico",
});

const gitAndGitHub = new Course({
  name: "Git y GitHub profesional",
});

// Escuelas
const escuelaDesarrollo = new LearningPath({ name: "Escuela de Desarrollo Web", courses: [programacionBasica, javascriptBasico, gitAndGitHub] });
const escuelaDataScience = new LearningPath({ name: "Escuela de Data Science", courses: [programacionBasica] });
const escuelaVideoGames = new LearningPath({ name: "Escuela de Video Juegos", courses: [programacionBasica] });

// Students
const student_1 = new FreeStudent({
  name: 'Juan',
  surname: "Capriotti",
  age: "23",
  email: "jcapriotti@gmail.com",
  username: 'juancito',
  twitter: 'juankapito',
  instagram: 'juancapriotti',
  learningPaths: [
    escuelaDataScience,
    escuelaVideoGames,
    escuelaDesarrollo,
  ],
});

const student_2 = new BasicStudent({
  name: 'Carlos',
  surname: "Maslaton",
  age: "60",
  email: "carlos@gmail.com",
  username: 'carlitos',
  twitter: 'carlosmaslaton',
  instagram: 'carlosmaslaton',
  learningPaths: [
    escuelaDataScience,
    escuelaVideoGames,
  ],
});

const freddy = new TeacherStudent({
  name: 'Freddy',
  surname: "Vega",
  age: "33",
  email: "f@gmail.com",
  username: 'freddier',
  twitter: 'freddier',
  instagram: 'freddiervega',
  learningPaths: [
    escuelaDataScience,
    escuelaVideoGames,
  ],
});


student_2.postComment('Me encanto el curso');
student_1.postComment('Me encanto el curso pero no tanto');
freddy.postComment('Me encanto el curso pero no tanto');

const a = {};
console.log(a);