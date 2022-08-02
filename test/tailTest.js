const assertEqual = require('../assertEqual');
const tail = require('../tail');

let result = tail([1, 2, 3, 4, 5]);
console.log(result);

assertEqual(result[0], 2);
assertEqual(result[1], 3);
assertEqual(result[2], 4);

result = tail(["Words", "To", "Be", "Taken", "Literally"]);

assertEqual(result[0], "To");
assertEqual(result[1], "Be");
assertEqual(result[2], "Taken");