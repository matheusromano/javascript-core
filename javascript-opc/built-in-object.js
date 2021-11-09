// 'use strict';

(function () {
  display(Math.PI);
  display(Math.max(4, 12, 56, 5, 8, 1001));
  display(Math.round(78.512124244));
})();

(function () {
  let date = new Date(2050, 3, 28, 1, 30, 47);
  let date1 = new Date(2052, 5, 12, 1, 40, 03);

  display(date1 - date);
})();

(function () {
  function checkPasswordComplexity(password) {
    // let regex = new RegExp("^(?=.*[a-z]) (?=.*[A-Z])(?=.*\\d).{10,}$", "gi");
    let regex1 = /^(?=.*[a-z]) (?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex1.test(password);
  }

  display(checkPasswordComplexity('Stronger1'));


  function findAlerts(logData) {
      let regex = /ERROR(.*?):(.*?);/g;

      let result = regex.exec(logData);
      while(result !== null) {
          display(result[1])
          display(result[2])
          display('-----------------------------')
          result =  regex.exec(logData)
      }

  }

  let logData = 'INFO:Ok;ERROR(LOW):Something laji;ERROR(HIGH):Something broke;';
  findAlerts(logData)

//   display(result[0])
//   display(result.index)
//   display(result.input)
// display(result)
})();
