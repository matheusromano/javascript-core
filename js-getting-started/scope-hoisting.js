

let count = 5;
while (count) {
  console.log(count);
  count--;
}


/* Using the strind 'use strict' you must to declare type
of the variable operator you want to set
'use strict';

let productId = 1234;

console.log(productId); */


/* Only function return can be hoisted and thats good 
showProductId();

function showProductId() {
    console.log(123);
    
}

productId = 123;

console.log(productId);
// the operator var can be hoisted and thats not good at all
var productId = 456;
 */

/* If you declare a variable in the function scope its will
only available in the function scope
function showProductId() {
  let productId = 12345;
  function fix() {
    console.log("in fix: ", productId);
  }
  console.log("in showProductId: ", productId);
  fix();
 
}

showProductId(); */

/* This a good practice to declare a const with the variables
that we will use in the global scope
const app = {
  productId: 12345,
  userName: "Matheus",
  orderNumber: 789,
};
function showProductId() {
  console.log(app.userName);
}

showProductId(); */
