// function sayMyName() {
//   return "Thats your name";
// }

// let name = sayMyName();
// console.log(name);

// function count1() {
//   for (let index = 0; index < arguments.length; index++) {
//     console.log((arguments[index] += 1));
//   }
// }

// count1(4, 3, 2, 1, 0); // 5, 4, 3, 2, 1

// // // test a varible out of function scope
// // function greeting() {
// //     let message = 'Hello';
// //     console.log(message); // works
// // }
// // greeting();
// // console.log(message); // dont works

// // function greetings2() {
// //      let message = 'Hello'
// //     let sayHi = function hi() {
// //          message = 'Hi'
// //     }
// //     sayHi()
// //     console.log(message);
// // }

// // greetings2()

// let message = "Hi";
// if (message === "Hi") {
//   let message = "Inside the block";
//   console.log(message);
// }
// console.log(message);

// // functions invoked at the moment that its difined
// // immediately invoked function expression (IIFE)

// (function () {
//   console.log("hello");
// })();

// // functions with closure

// let greetings = (function () {
//   let message = "lalala";
//   let getMessage = function () {
//     return message;
//   };
//   return {
//     // defines a variable to returns the functions actions
//     meuPau: getMessage,
//   };
// })();
// console.log(greetings.meuPau());

// // another example of closure usage

// function setCounter(val) {
//   return function counter() {
//     return val++;
//   };
// }

// let counter1 = setCounter(0);
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// let counter2 = setCounter(10);
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// //  Arrow Functions

// // normal function
// function sum1(num1, num2) {
//   return num1 + num2;
// }
// let output = sum1(4, 8);
// console.log(output);

// // refactor to arrow function
// let sum = (num1, num2) => num1 + num2;

// let anwser = sum(4, 5);
// console.log(anwser);

// let nome = "Matheus";

// let message = {
//   name: "Matheus",
//   regularFunction: function () {
//     // console.log('Hello '+ this.name);
//   },
//   arrowFunction: () => console.log("Hey " + this.name),
// };

// message.regularFunction();
// message.arrowFunction();

// // Call method

// let person1 = { name: "John", age: 22 };
// let person2 = { name: "Mary", age: 26 };
// let sayHi = function () {
//   console.log("Hi, " + this.name);
// };

// // allows to pass arguments thats completes the function objective
// // in a form of a list
// sayHi.call(person1);
// sayHi.call(person2);

// // Apply, the same function as the call method, but in this way
// // we use an array of arguments

// let introdution = (name, profession) =>
//   console.log("My name is " + name + " and I am a " + profession);

// introdution("Matheus", "Brabao");

// introdution.apply(['Lara', 'Brabinha'])
// introdution.call(undefined, 'ALLA', 'God')

// The bind method makes a copy of the the function
// and allows to pass other values
// let person1 = {
//     name: 'Mary',
//     getName: function() {
//         return this.name
//     }
// }

// let person2 = {
//     name:'Matheus'
// }

// let getNameCopy = person1.getName.bind(person2)

// console.log(getNameCopy());

// Built-in functions
let x = 45;
let y = 5;
let s = "lalala";
console.log(eval("x - y + s"));

// Escape and Unescape code and decode strings

console.log(escape("text")); // text
console.log(escape("♣♀8)32D5>2☺685")); // %u2663%u26408%2932D5%3E2%u263A685
console.log(escape("djhdkhf51511  54 515 6")); // %20%20

console.log("====================================");

console.log(unescape("text"));
console.log(unescape("%u2663%u26408%2932D5%3E2%u263A685"));
console.log(unescape("djhdkhf51511%20%2054%20515%206"));

// default parameter (always declare the regular parameter before the  default)

// let sayHi = (message, name = "World") => console.log(message +" " + name);
// sayHi("Hello")
// sayHi('Hi', 'Matheus')

//  Rest parameters (...) used to express the multiple arguments will be passed
let greet = (message, ...names)  => {
    console.log(message + ' everybody');
    names.forEach((name) => console.log("hi " + name));}
;

greet('Welcome' , "Matheus", "Romano", "Braga");


// Spread operator (...) the spread operator is used into the arguments field

let display= (char1,char2,char3,char4, ...therest) => {
    console.log(therest);
    console.log(char1, char2, char3, char4);
}

let letters = 'abcdfge'
display(...letters)
console.log(letters[3]);
