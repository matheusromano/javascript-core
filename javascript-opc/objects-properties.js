"use strict";
(function () {
  let person = {
    firstName: "Matheus",
    lastName: "Romano",
    age: 18,
    isAdult: function () {
      return person.age >= 18;
    },
  };

  let healthStats = {
    height: 78,
    weught: 200,
  };

  function mergeStats(p, hp) {
    return Object.assign({}, p, hp);
  }

  let mergedPerson = mergeStats(person, healthStats);

  display(mergedPerson);

  display(person);

  let person2 = {};
  Object.assign(person2, person);
  display(person2);
  display(person === person2);

  display("Print the keys od the object Person: " + Object.keys(person));

  for (let propety in person) {
    display(`Print the keys of the object Person: ${propety}`);
  }
})();

(function () {
  function registrationUser(fName, lName) {
    let person = {
      fName,
      lName,
    };
    display(person);
  }
  registrationUser("MatALlaheus", "Romano");
})();

// (function () {
//   function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isAdult = () => this.age > 21;
//   }

//   let matheus = new Person("Matheus", "Romano", 45);
//   let carla = new Person ("Carla", "Lazara", 14);

//   display(matheus.isAdult())
//   display(carla.isAdult())
// })();

(function () {
  let person = {
    name: {
      firstName: "Matheus",
      lastName: "Romano",
    },
    age: 15,
  };

  for (let propertyName in person) {
    display(propertyName + ": " + person[propertyName]);
  }

  Object.defineProperty(person, "name", { writable: false });

  // Object.freeze(person.name)

  person.name.lastName = "Braga";
  display(person.name);

  display(Object.getOwnPropertyDescriptor(person, "firstName"));
})();

(function () {
  display("==========================================================");
  let person = {
    firstName: "Matheus",
    lastName: "Romano",
    age: 15,
  };

  Object.defineProperty(person, "firstName", { enumerable: false });

  for (let propertyName in person) {
    display(propertyName + ": " + person[propertyName]);
  }

  display(Object.keys(person));
  display(JSON.stringify(person));
  display(person.firstName);
})();

(function () {
  display("==========================================================");
  let person = {
    firstName: "Matheus",
    lastName: "Romano",
    age: 15,
  };

  // Object.defineProperty(person,'firstName', {configurable: false})
  // Object.defineProperty(person,'firstName', {enumerable: false})
  // Object.defineProperty(person,'firstName', {writable: true})

  delete person.firstName;

  for (let propertyName in person) {
    display(propertyName + ": " + person[propertyName]);
  }

  display(Object.keys(person));
  display(JSON.stringify(person));
  display(person.firstName);
})();

(function () {
  display("==========================================================");
  let person = {
    name: {
      first: "Matheus",
      last: "Romano"
    },
    age: 15,
  };

  Object.defineProperty(person, 'fullName', {
    get: function() { return this.name.first + " " + this.name.last},
    set: function(value) {
      var nameParts = value.split('.');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    },
  });

    person.fullName = 'LAla.LOLP'

    display(person.fullName)

    display(person.name.first);
    display(person.name.last)
})();
