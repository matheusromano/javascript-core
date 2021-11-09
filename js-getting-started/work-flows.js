
/* Do While Loop 
let count = 1-10;
do {
    console.log(count);
    count++
} while (count < 10);
*/

/* While() Loop 
let i = 4;
while (i>0) {
    console.log(i);
    i--;
    
}
*/

/*Looping with for 
for (let i=0; i < 5; i++) {
    console.log(i);
}
*/



/* The available of a variable depeding where it will declare
if a variable declared by the let or const operator only could be used
in the scope the it declared, voiding the leak of this values 
if (true) {
    let value = 'yes';
    showMessage(value);
    
}
console.log(value);
*/


/* The ternary operator
(codition) ? true-statement : false-statement;


let price = 45;

let message =
  (price < 50) ? "Its more then 30" : "It less then 30";

showMessage(message);
*/

/* The comparing identical types '===' to just the value '=='
It's a best practice to always use the === comparing exp and !== to negative

 
if ("2" !== "2") {
    showMessage('true')
}
else {
    showMessage('false');
}
*/

/* If.. else statement 
let price = 20

if (price < 10) {
    showMessage('true')
} else if(price <  15) {
    showMessage('more then 15')
} else if (price > 17) {
    showMessage('more then 17')
}
*/

/* Falsy: false, 0, ""or '' (empty string), null, undefined, NaN
truthy: Everything Not falsy, true, 0.5, "0"
the operator "+" transform the sentence to number
if (+(1.1 + 1.3).toFixed(1) === 2.4) {
    let message = "Hello"
    showMessage(message);
  
}

*/

// If statement
// let price = 20

// if(price !== 15) {
//     showMessage('discounted');
// }
