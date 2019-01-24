// CODE here for your Lambda Classes
class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  changeGrade(student) {
    student.grade = student.grade + Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100);
    if (student.grade < 1) {
      student.grade = 1;
    }
    if (student.grade > 100) {
      student.grade = 100;
    }
    console.log(`${student.name}'s grade is now ${student.grade}`);
  }
}
class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = Math.floor(Math.random() * 100);
  }
  listsSubjects() {
    this.favSubjects.forEach(function(c) {
      console.log(c);
    });
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name} graduated with a ${this.grade}%!`);
      return true;
    }
    else {
      return false;
    }
  }
}
class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const andrew = new Student({
  name: 'Andrew',
  age: 25.52,
  location: 'Happy Valley',
  gender: 'M',
  previousBackground: 'some college',
  className: 'WEB17',
  favSubjects: ['math', 'science', 'history']
});
const jake = new ProjectManager({
  name: 'Jake',
  age: 2349,
  location: 'beyond yon mountains',
  gender: 'M',
  specialty: 'wooing women with slicked-back hair',
  favLanguage: 'love',
  catchPhrase: 'babe, c\'mon, we must dance',
  gradClassName: 'WEB17',
  favInstructor: 'Josh Knell'
});

andrew.speak();
andrew.listsSubjects();
andrew.PRAssignment('higher order functions');
andrew.sprintChallenge('recursive regular expressions')
jake.speak();
jake.demo('dirty dancing');
jake.grade(andrew, 'hummus making');
jake.standUp('WEB17HELP');
jake.debugsCode(andrew, 'training an AI to destroy all human life');

while (!andrew.graduate()) {
  jake.changeGrade(andrew);
}