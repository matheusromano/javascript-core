

/* The parameter is passed to the scope of the function
changePercentOff(30)*/

/* The function in other function, this is normal in javascript
let key = 42;

function getSecretCode(value) {
  let keyGenerator = function () {
    let key = 12;
    console.log("in keygenerator: ", key);
    return key;
  };

//   this is the primary function so it will executes firsts
  let code = value * keyGenerator();
  console.log('in getSecretCode: ', key);
  return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);*/

/* Functions that return a value
function getSecretCode(value) {
  let code = value * 42;
  return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);*/

/* passing information to our functions, if you to send values for de parameter
the return is set to undefined
let myFunction = function loggingFunction(message, firstName) {
    console.log(message, firstName);
}
myFunction('Hello', 'Matheus');
*/

// function expression (with variables)
// let fn = function loggingFunction (params) {
//     console.log('Here is a message');
// }

// fn();

// function decoration (without variable)
// function logMessage(params) {
//     console.log('Here is a message');
// }
// logMessage();
// logMessage();
