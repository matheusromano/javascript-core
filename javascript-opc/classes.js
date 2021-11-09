"use strict";
(function () {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    static adultAge = 18

    get fullName() {
      return this.firstName + " " + this.lastName;
    }

    set fullName(fullName) {
      let nameParts = fullName.split(".");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isAdult() {
      return this.age > 18;
    }
  }
  display(Person.adultAge)

  // Object.defineProperty(Person.prototype, "fullName", { enumerable: true });

  let matheus = new Person("Matheus", "Romano", 20);
  display(matheus);

  display(matheus.fullName);
  matheus.fullName = "jose.maria.joao";
  display(matheus.fullName);
  display(matheus.isAdult());


class Student extends Person{
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this._enrolledCourses = [];
  }

  static fromPerson(person) {
    return new Student(person.firstName, person.lastName, person.age)
  }

  enroll(courseId) {
    this._enrolledCourses.push(courseId);
  }

  getCourses() {
    return this.fullName + "'s enrolled courses are: " +
      this._enrolledCourses.join(", ");
  }
}

// let ronaldo = new Student('Ronaldo', 'Fenomeno', 40)

// ronaldo.enroll('CS101')

// display(ronaldo.getCourses())

let roberval = new Person('Roberval', 'Maia', 65)

let robervalStudent = Student.fromPerson(roberval)
robervalStudent.enroll('Marcenaria')

display(robervalStudent.getCourses())

})();