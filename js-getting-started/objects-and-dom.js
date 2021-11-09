/*Detecting buttons and tell it to do something 

const button = document.getElementById("see-review");

button.addEventListener("click", function () {
  const review = document.getElementById("review");

  if (review.classList.contains('d-none')) {
    review.classList.remove('d-none');
    button.textContent = 'CLOSE REVIEW'    
  } else {
    review.classList.add('d-none');
    button.textContent = 'SEE REVIEW'    
  }
  
});
*/

/* stylling a html element 
const header = document.getElementById('message')

// To use css that uses the ' - ' use de camelCase format
header.style.fontFamily = 'Arial'
header.style.color = '#FFF'
header.style.fontWeight = '100'
*/

/* Working with built-in objects (Date, Math, String, Number)
let now = new Date();
// showMessage( now.toDateString())
showMessage(Math.abs(-4.5))
*/

/* Passing a object inside a function, the function have free acess about every 
propertie and method of the object
let person = {
  name: "Matheus",
  age: 32,
  partTime: false,
};
function incrementAge(alala) {
  alala.age++;
}

// pass the reference to the method
incrementAge( person );

showMessage(person.age); */

/* Passing a function inside a object that we common call method
let person = {
  name: "Matheus",
  age: 32,
  partTime: false,
//   show info is actully a function but is called method becouse is into a object 
  showInfo: function (realAge) {
    showMessage(this.name + " is " + realAge);
  },
};

person.showInfo(20);*/

/* Object with symbol and properties
let mySymbol = Symbol();

let person = {
  name: "Matheus",
  age: 32,
  partTime: false,
  [mySymbol]: 'secretInformation'
};

person['age'] = 44;

showMessage(person.age); */
