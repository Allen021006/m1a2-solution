const { execSync } = require('child_process');

describe('Student info (student.json)', () => {
  const student = require('./student.json');
  test('classCode is filled in', () => { expect(student.classCode).toBeTruthy(); });
  test('fullName is filled in', () => { expect(student.fullName).toBeTruthy(); });
  test('studentNumber is filled in', () => { expect(student.studentNumber).toBeTruthy(); });
  test('studentEmail is filled in', () => { expect(student.studentEmail).toBeTruthy(); });
  test('personalEmail is filled in', () => { expect(student.personalEmail).toBeTruthy(); });
  test('githubAccount is filled in', () => { expect(student.githubAccount).toBeTruthy(); });
});

describe('Student Detail output', () => {
  const output = execSync('node index.js').toString();
  const student = require('./student.json');

  test('prints the student name', () => { expect(output).toContain(student.fullName); });
  test('prints the student number', () => { expect(output).toContain(student.studentNumber); });
  test('prints the course', () => { expect(output).toContain(student.course); });
  test('prints the year level', () => { expect(output).toContain(student.yearLevel); });
  test('lists enrolled course 6APPDEV', () => { expect(output).toContain('6APPDEV'); });
  test('lists enrolled course 6WANTECH', () => { expect(output).toContain('6WANTECH'); });
  test('lists enrolled course 6ASI', () => { expect(output).toContain('6ASI'); });
});
