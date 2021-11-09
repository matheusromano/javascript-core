"use strict";
(function () {
  let myFunction = function () {};

  display(myFunction.prototype);

  let person = { firstName: "Matheus" };

  display(person.prototype);

  display(person.__proto__);
})();

(function () {
  display("======================================");

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 19;

  display(Person.prototype);

  let matheus = new Person("Matheus", "Romano");
  let sabrina = new Person("Sabrina", "Vino");

  sabrina.__proto__.age = 19;

  display(matheus.__proto__);
  display(sabrina.__proto__);

  display(Person.prototype === matheus.__proto__);
})();

(function () {
  display("======================================");

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 19;

  let matheus = new Person("Matheus", "Romano");
  let sabrina = new Person("Sabrina", "Vino");
  matheus.age = 20;

  display(matheus.hasOwnProperty("age"));
  display(matheus.age);
})();

(function () {
  display("======================================");

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 78;

  let matheus = new Person("Matheus", "Romano");
  let sabrina = new Person("Sabrina", "Vino");

  Person.prototype = { age: 777 };

  Person.prototype = { firstName: "Cabeça de Burro" };

  let jagunco = new Person("", "Silva");

  display(Person.prototype);
  ~display(matheus.age);
  display(sabrina.age);
  display(jagunco.firstName);
  display(jagunco.lastName);
})();

(function () {
  display("======================================");

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, "fullName", {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      enumerable: true,
    });
  }

  function Student(firstName, lastName, age) {
      Person.call(this, firstName, lastName, age)
    this._enrolledCourses = [];

    this.enroll = function (courseId) {
      this._enrolledCourses.push(courseId);
    };

    this.getCourses = function () {
        return this.fullName + "'s enrolled courses are: "+
            this._enrolledCourses.join(', ');
    };
  }
  Student.prototype = Object.create(Person.prototype)
  Student.prototype.constructor = Student;

  let matheus = new Student('Matheus', 'Romano', 29)

  matheus.enroll('CS205');
  matheus.enroll('MA101');
  matheus.enroll('PS101')

  display(matheus.getCourses())
})();
