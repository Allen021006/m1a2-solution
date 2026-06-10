const student = require('./student.json');

console.log(student.fullName);
console.log(student.studentNumber);
console.log(student.course);
console.log(student.yearLevel);
student.enrolledCourses.forEach(course => console.log(course));
