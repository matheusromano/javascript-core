
/* Manipulating the dom using the document class the method (getElementsByClassName)
gave us a type of array of html elements so we usinng them
const containers = document.getElementsByClassName('container');
containers[2].classList.add('d-none')
console.log(containers);*/


/* list one by one the elements inside the array 
const values = ['a', 'b', 'c'];

values.forEach(function (item) {
    console.log(item);
})*/


/* the find method returns the VALUE of the founded element,
and only once time, it doesnt return more than one value per 
search
const values = ["aaa", "bb", "cccc", "ddd"];

const found = values.find(function (anything) {
    return anything.length > 3;
});
console.log(found);*/


/* The filter method, return a new array thats satisfacts the
creteria inputs on return, if it couldnt filter anything
returns and empty array
const values = ['a', 'b', 'c'];

const set = values.filter(function (anything) {
    console.log('element:', anything);
    return anything > 'a';
})

console.log(set); */

/* The indexOf return the index of an element if it exists
if it doesnt returns -1
const values = ["a", "b", "c", "d", "e"];
console.log( values.indexOf('e'));
console.log( values.indexOf(4)); */

/* With splice you can delete, update and insert values
passing the index, the number of deleted elements
and the new value that will be inserted.
const value = ["a", "b", "c", "d", "e"];
// value.splice(2, 2, "here at 2");
value.splice(2, 0, "here at 2");
console.log(value); */

/* with slice you really get an slice of the array
but the original is not affected
const value = ["a", "b", "c", "d", "e"];
const newValues = value.slice(1, 4);
const newValues2 = value.slice(); // that code will make a copy
console.log(newValues, newValues2); */

/* Add elements to array, but in the final of the element 
const values = ['a', 'b', 'c' ];
values.unshift('Hello', 'World') 
console.log( values );*/

/* shifts out the first element and returns  
const values = ['a', 'b', 'c' ];
const first = values.shift() 
console.log( values, first );*/

/* pops out the last element of the array 
const values = ['a', 'b', 'c' ];
const last = values.pop()
console.log( values, last );*/

/* Add elements to array, but in the final of the element
 const values = ['a', 'b', 'c' ];
 values.push('d')
 console.log( values );*/

/* Creating an Array and Searching for values 
let values = ["a", "b", "c"];
const array = Array.of(1, 2, 3)

console.log(Array.isArray(values));
console.log(values[0]);
console.log(values[4]); */
